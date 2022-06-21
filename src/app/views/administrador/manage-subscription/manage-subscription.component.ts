import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin.service";

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html',
  styleUrls: ['./manage-subscription.component.css']
})
export class ManageSubscriptionComponent implements OnInit {

  subscriptions : any [] = []
  constructor(private _adminService : AdminService) { }

  ngOnInit(): void {
    this.subscriptions=[];
    this._adminService.getSubscriptions().subscribe(
      (response : any[]) =>{
        this.subscriptions = response
        console.log(this.subscriptions)
      }
    )
  }
  deleteSubscription(id : number) {
    this._adminService.deleteSubscription(id).subscribe(
      response => this.ngOnInit()
    )
  }

}
