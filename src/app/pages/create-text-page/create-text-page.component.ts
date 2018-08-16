import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-create-text-page',
  templateUrl: './create-text-page.component.html',
  styleUrls: ['./create-text-page.component.css']
})
export class CreateTextPageComponent implements OnInit {

  title: string;
  textBody: string;

  constructor(
    private textService: TextService
  ) { }

  ngOnInit() {
  }

  submitText(form) {
    this.textService.create({
      title: this.title,
      textBody: this.textBody
    }).then(() => {
      console.log('TEXT CREATED!')
    }).catch(error => console.log(error))


    // this.processing = true;
    // this.authService.signup({
    //   username: this.username,
    //   password: this.password
    // }).then(() => {
    //   this.router.navigate(['/profile']);
    // })
    // .catch(error => {            
    //   this.error = error.error;        
    //   this.processing = false;
    //   this.feedbackEnabled = false
    // });
  }

}
