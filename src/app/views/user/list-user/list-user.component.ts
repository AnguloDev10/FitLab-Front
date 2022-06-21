import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers:any =[];
  constructor(private _profileService:ProfileService) { 
  }

  ngOnInit(): void {
    this.getAllAsync();
  }

  getAllAsync(){
     this._profileService.getAll().subscribe(response=>{
      this.listUsers =response;
    })
  }

}
