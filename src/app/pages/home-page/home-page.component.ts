import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  texts: Array<any> = [];  

  constructor(
    private textService: TextService,
  ) { }

  ngOnInit() {
    this.listAll();
  }  
  
  listAll() {
    this.textService.listAll().then((texts) => {      
      this.texts = texts;      
    })    
  }

}
