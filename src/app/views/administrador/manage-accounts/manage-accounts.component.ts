import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin.service";
import {IRootObject} from "../../../model/Account";

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {

  accounts : any[] = [];
  constructor(private _adminService : AdminService) { }

  ngOnInit(): void {
    this.accounts=[];
    this._adminService.getAccounts().subscribe(
      (response : any[]) =>{
        this.accounts = response
        console.log(this.accounts)
      }
    )
  }
  deleteAccount(id : number) {
    this._adminService.deleteAccount(id).subscribe(
      response => this.ngOnInit()
    )
  }

}
