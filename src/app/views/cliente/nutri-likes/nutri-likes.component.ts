import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../../services/cliente.service";

@Component({
  selector: 'app-nutri-likes',
  templateUrl: './nutri-likes.component.html',
  styleUrls: ['./nutri-likes.component.css']
})
export class NutriLikesComponent implements OnInit {

  id: any
  members: any[];
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 5;

  constructor( private _clienteService  :ClienteService) {
    this.members=[]
    this.id = localStorage.getItem("userid")
  }

  ngOnInit(): void {

    this._clienteService.getLikedNutricionistas(this.id).subscribe(response=> {
      this.members = response
    })
  }

  loadLikes() {

  }
}
