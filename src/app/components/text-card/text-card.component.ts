import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input() text: any;
  
  anon: boolean;
  user: any;  

  constructor(
    private authService: AuthService,
    private textService: TextService,
    private router: Router    
  ) { }

  ngOnInit() {    
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;      
    });    
  }
  
  deleteText() {    
    this.textService.deleteOne(this.text._id)
      .then(() => this.router.navigate(['/']))
  }

}
