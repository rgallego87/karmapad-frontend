import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextService } from '../../services/text.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-text-details-page',
  templateUrl: './text-details-page.component.html',
  styleUrls: ['./text-details-page.component.css'],
  providers: [MessageService]
})
export class TextDetailsPageComponent implements OnInit {

  text: any;  
  feedbackEnabled = false;
  error = null;
  processing = false;
  sentimentResult: any;
  languageResult: any;
  keyPhrasesResult: any;

  constructor(
    private textService: TextService,
    private route: ActivatedRoute,    
    private messageService: MessageService   
  ) {}

  ngOnInit() {    
    this.route.params
    .subscribe((params) => {
      this.textService.getOne(params.id)
      .then(data => this.text = data);
    });
  }  
  
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.route.params
      .subscribe((params) => {
        this.textService.analyze(params.id)
        .then(data => {          
          console.log(data);
          this.sentimentResult = data.documentProcessed["documents"][0].score;
          this.sentimentResult = parseFloat(this.sentimentResult).toFixed(2);
          this.sentimentResult = this.sentimentResult * 100;
          this.languageResult  = data.language;
          this.keyPhrasesResult = data.keyPhrases;
          this.processing = false;
        })
        .catch(error => {            
          this.error = error.error;        
          this.processing = false;
          this.feedbackEnabled = false
        });
      })
        
    }
  }

  // Filling right color on Valoration bar
  getColor(valoration) { 
    if (valoration > 50) {
      return 'green';
    } else if (valoration < 50) {
      return 'red';
    } else return 'blue';
  }

  // Message Service methods to show toast messages
  showSuccess(form) {
    if (form.valid && this.processing === false) {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});    
    }
  }
  onConfirm() {this.messageService.clear('c');}
  onReject() {this.messageService.clear('c');}
  clear() {this.messageService.clear();}

}
