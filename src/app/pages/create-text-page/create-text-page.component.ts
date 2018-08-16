import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-text-page',
  templateUrl: './create-text-page.component.html',
  styleUrls: ['./create-text-page.component.css']
})
export class CreateTextPageComponent implements OnInit {

  title: string;
  body: string;

  constructor() { }

  ngOnInit() {
  }

}
