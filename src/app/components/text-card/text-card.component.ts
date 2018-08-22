import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TextService } from '../../services/text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input() text: any;
  @Output() cardDeleted:EventEmitter<any> = new EventEmitter<any>();
  
  anon: boolean;
  user: any;  

  constructor(
    private authService: AuthService,
    private textService: TextService,
    public router: Router     
  ) { }

  ngOnInit() {    
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;      
    });    
  }
  
  deleteText() {    
    this.cardDeleted.emit(this.text._id);
    this.textService.deleteOne(this.text._id);      
  }
}
