import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProfileService } from '../../../services/profile/profile.service';
import { ItypeNutritions } from '../../../shared/models/type-nutritionist';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, OnChanges {

  @Input() filterUser:ItypeNutritions;

  listUsers: any = [];
  constructor(private _profileService: ProfileService) {
  }
  


  ngOnInit(): void {
    this.getAllAsync();
  }

  getAllAsync() {
    this._profileService.getByFilter(this.filterUser).subscribe(response => {
      console.log(response);
      this.listUsers = response;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
   this.getAllAsync();
  }
  
  approbeNutritions(id:number){
    debugger
    let data = {
      Status:1,
      id:id
    }
     this._profileService.putProfile(data).subscribe(response=>{
      this.filterUser.status =1;
      this.getAllAsync();
     })
  }

}
