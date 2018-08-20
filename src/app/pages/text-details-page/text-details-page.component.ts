import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-text-details-page',
  templateUrl: './text-details-page.component.html',
  styleUrls: ['./text-details-page.component.css']
})
export class TextDetailsPageComponent implements OnInit {

  text: any;

  constructor(
    private textService: TextService,
    private route: ActivatedRoute   
  ) { }

  ngOnInit() {    
    this.route.params
    .subscribe((params) => {
      this.textService.getOne(params.id)
      .then(data => this.text = data);
    });
  }  

}
