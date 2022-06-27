import { Component, OnInit } from '@angular/core';
import {NutrivService} from "../../../services/nutriv.service";

@Component({
  selector: 'app-nutricionista-schedule',
  templateUrl: './nutricionista-schedule.component.html',
  styleUrls: ['./nutricionista-schedule.component.css']
})
export class NutricionistaScheduleComponent implements OnInit {

  schedules : any [] = []
  constructor(private _nutrivService : NutrivService) { }

  ngOnInit(): void {
    this.schedules=[];
    this._nutrivService.getSchedule().subscribe(
      (response : any[]) =>{
        this.schedules = response
        console.log(this.schedules)
      }
    )
  }
  deleteSchedule(id : number) {
    this._nutrivService.deleteSchedule(id).subscribe(
      response => this.ngOnInit()
    )
  }

  UpdateSchedule(id: number, data: string ){
    this._nutrivService.UpdateSchedule(id,data).subscribe(
      response => this.ngOnInit()
    )
  }


}
