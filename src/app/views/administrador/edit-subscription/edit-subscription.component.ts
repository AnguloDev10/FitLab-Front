import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.css']
})
export class EditSubscriptionComponent implements OnInit {

  form: FormGroup;
  id : any ; plan : any=[];

  constructor(private router : Router,private fb:FormBuilder, private route: ActivatedRoute, private _adminService : AdminService, private location : Location) {
    this.form = this.fb.group({
      name:['', Validators.required],
      maxSessions:['', Validators.required],
      price:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.plan =[];
    this.id = this.route.snapshot.paramMap.get('id');
    this._adminService.getSubscription(this.id)
      .subscribe(
        response => {
           this.plan.push(response), console.log(response);
        }
      )
  }

  updatePlan(data:any) {
    this._adminService.updateSubscription(data.value,this.id)
      .subscribe(
        response => {
          this.ngOnInit()
        },
      )
  }
  cancel() {
    this.location.back();
  }

}
