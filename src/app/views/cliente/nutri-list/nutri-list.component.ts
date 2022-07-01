import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";
import {UserParams} from "../../../model/UserParams";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-nutri-list',
  templateUrl: './nutri-list.component.html',
  styleUrls: ['./nutri-list.component.css']
})
export class NutriListComponent implements OnInit {

  nutricionistas : any[]
  form: FormGroup;
  flag : boolean
  userparams : UserParams;
  constructor(private clienteService : ClienteService, private fb:FormBuilder) {
    this.form = this.fb.group({
      minAge: ['', Validators.required],
      maxAge: ['', Validators.required],
    })
    this.flag = false
  }

  ngOnInit( ): void {
      this.loadMembers()
  }

  getNutricionistas(){
    this.clienteService.getNutricionistas().subscribe((response)=>{
      this.nutricionistas = response;
      console.log(this.nutricionistas)
    })
  }

  change(){
    this.flag = true;
  }


  loadMembers() {
    console.log(this.form.value)
     this.clienteService.getNutricionistabyAge(this.form.value.minAge,this.form.value.maxAge).subscribe(response=>{
       this.nutricionistas = response;
       console.log(this.nutricionistas)
     })
    this.flag = false
  }

  resetFilters() {
    this.form.reset()
  }
}
