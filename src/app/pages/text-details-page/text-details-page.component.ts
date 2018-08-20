import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextService } from '../../services/text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-details-page',
  templateUrl: './text-details-page.component.html',
  styleUrls: ['./text-details-page.component.css']
})
export class TextDetailsPageComponent implements OnInit {

  text: any;
  feedbackEnabled = false;
  error = null;
  processing = false;
  sentimentResult: any;
  languageResult: any;  

  constructor(
    private textService: TextService,
    private route: ActivatedRoute,
    private router: Router,   
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
          this.languageResult = data.language;
        })
        .catch(error => {            
          this.error = error.error;        
          this.processing = false;
          this.feedbackEnabled = false
        });
      })
        
    }
  }

}
