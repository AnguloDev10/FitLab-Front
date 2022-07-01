import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cliente-prof',
  templateUrl: './cliente-prof.component.html',
  styleUrls: ['./cliente-prof.component.css']
})
export class ClienteProfComponent implements OnInit {

  formBasicDates:FormGroup;
  name : any
  phone : any
  age : any
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
    this.phone = localStorage.getItem("phone");
    this.age = localStorage.getItem("age");
  }

  selectTab(number: number) {

  }
}
