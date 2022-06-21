import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutricionista-dashboard',
  templateUrl: './nutricionista-dashboard.component.html',
  styleUrls: ['./nutricionista-dashboard.component.css']
})
export class NutricionistaDashboardComponent implements OnInit {

  constructor() { }
  title = 'FitLab-Front';
  sideBarOpen = true;

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
