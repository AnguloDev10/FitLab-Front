import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ClienteService} from "../../../services/cliente.service";
@Component({
  selector: 'app-reu-list',
  templateUrl: './reu-list.component.html',
  styleUrls: ['./reu-list.component.css']
})
export class ReuListComponent implements OnInit {

  meetings : any []
  meetingRef: any;
  editForm: boolean;
  id : any
  constructor( private router: Router, private _clienteService : ClienteService,
               private location : Location, private route: ActivatedRoute) {
   this.meetings = [];
    this.id = localStorage.getItem("userid");
    this.getSesiones(this.id)
  }

  ngOnInit(): void {

  }

  getSesiones(id : any) {
    this._clienteService.getSesiones(id).subscribe( response =>{
      this.meetings = response;
    })
  }

  dirigir() {

  }
}
