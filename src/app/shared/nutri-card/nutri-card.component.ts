import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nutri-card',
  templateUrl: './nutri-card.component.html',
  styleUrls: ['./nutri-card.component.css']
})
export class NutriCardComponent implements OnInit {

  @Input() member: any;
  constructor() { }

  ngOnInit(): void {
  }

}
