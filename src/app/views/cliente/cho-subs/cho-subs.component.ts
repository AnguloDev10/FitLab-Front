import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-cho-subs',
  templateUrl: './cho-subs.component.html',
  styleUrls: ['./cho-subs.component.css']
})
export class ChoSubsComponent implements OnInit {

  plan : any
  id : any
  constructor( private _admin:AdminService,   private router: Router,
               private location : Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  createPlanFree() {
    let data : any = {
      "active": true,
      "maxSessions": 2,
      "price": 0,
      "description": "Paquete Basico",
      "name": "FREE",
      "userId": this.id
    }
    this._admin.postSubscription(data).subscribe(

      response=> {
        Swal.fire("Create successfully","Click close button to back to the login page","success").then(result =>{
          this.router.navigate(['/clienteDashboard/clientHome'])
        })
      }
    )
  }
  createPlanStandard() {
    let data : any = {
      "active": "true",
      "maxSessions": 5,
      "price": 10,
      "description": "Paquete intermedio",
      "name": "STANDARD",
      "userId": this.id
    }
    this._admin.postSubscription(data).subscribe(
      response=> {
        Swal.fire("Create successfully","Click close button to back to the login page","success").then(result =>{
          this.router.navigate(['/clienteDashboard/clientHome'])
        })
      }
    )
  }
  createPlanAdvance() {
    let data : any = {
      "active": "true",
      "maxSessions": 10,
      "price": 20,
      "description": "Paquete Full",
      "name": "ADVANCE",
      "userId": this.id
    }
    this._admin.postSubscription(data).subscribe(
      response=> {
        Swal.fire("Create successfully","Click close button to back to the login page","success").then(result =>{
          this.router.navigate(['/clienteDashboard/clientHome'])
        })
      }
    )
  }

}
