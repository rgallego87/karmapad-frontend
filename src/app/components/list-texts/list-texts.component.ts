import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-texts',
  templateUrl: './list-texts.component.html',
  styleUrls: ['./list-texts.component.css']
})
export class ListTextsComponent implements OnInit {

  @Input() texts: Array<any>;  

  constructor() { }

  ngOnInit() {
  }  

}
