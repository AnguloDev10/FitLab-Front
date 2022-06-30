import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FactoryFilter } from './factory-filter/factory-filter-user';
import { ItypeNutritions } from '../../../shared/models/type-nutritionist';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.css']
})
export class UserProgressComponent implements OnInit {


  formFilter:FormGroup;
  userToFilter:ItypeNutritions ={
    status:1,
    dni:'0',
    name:'0'
  };
  constructor() { }

  ngOnInit(): void {
    this.formFilter = FactoryFilter();
  }


  search(){
    this.userToFilter =this.formFilter.value
  }

}