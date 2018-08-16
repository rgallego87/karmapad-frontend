import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-text-page',
  templateUrl: './create-text-page.component.html',
  styleUrls: ['./create-text-page.component.css'],
  providers: [MessageService]
})
export class CreateTextPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;  

  title: string;
  textBody: string;

  constructor(
    private textService: TextService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  submitText(form) {
    this.error = '';
    this.feedbackEnabled = true;
      if (form.valid) {
        this.processing = true;
        this.textService.create({
          title: this.title,
          textBody: this.textBody
      }).then(() => {            
        console.log('TEXT CREATED!')
      }).catch(error => {
        this.error = error.error;
        this.processing = false;
        this.feedbackEnabled = false
      })
    }
  }

// Message Service methods to show toast messages
  showSuccess(form) {
    if (form.valid) this.messageService.add({severity:'success', summary:'WELL DONE!', detail:'Text succesfully created'});
  }
  onConfirm() {this.messageService.clear('c');}
  onReject() {this.messageService.clear('c');}
  clear() {this.messageService.clear();}
}
