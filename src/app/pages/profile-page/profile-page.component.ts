import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  
  user: any;
  texts: Array<any> = [];  

  constructor(
    private textService: TextService,
    private authService: AuthService
  ) { }

  ngOnInit() {    
    this.getAllbyUser()
  }
  
  getAllbyUser() {
    this.textService.getAllbyUser().then((texts) => {      
      this.texts = texts;         
    })    
  }

}
