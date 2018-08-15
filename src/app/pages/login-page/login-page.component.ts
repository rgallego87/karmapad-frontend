import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;

  username: string;
  password: string;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }  

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.login({
        username: this.username,
        password: this.password
      }).then(() => {
        this.router.navigate(['/private']);
      })
      .catch(error => {
        // if (err.error.code === 'username-not-unique') this.userExist = true;       
        this.error = error.error;
        this.processing = false;
        this.feedbackEnabled = false
      });
    }
  }

}
