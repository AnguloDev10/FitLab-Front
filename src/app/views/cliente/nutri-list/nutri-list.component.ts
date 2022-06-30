import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";

@Component({
  selector: 'app-nutri-list',
  templateUrl: './nutri-list.component.html',
  styleUrls: ['./nutri-list.component.css']
})
export class NutriListComponent implements OnInit {

  nutricionistas : any[]
  constructor(private clienteService : ClienteService) { }

  ngOnInit( ): void {
   this.getNutricionistas()
  }

  getNutricionistas(){
    this.clienteService.getNutricionistas().subscribe((response)=>{
      this.nutricionistas = response;
      console.log(this.nutricionistas)
    })
  }
}
