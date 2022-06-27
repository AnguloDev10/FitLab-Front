import { Component, OnInit } from '@angular/core';
import {NutrivService} from "../../../services/nutriv.service";

@Component({
  selector: 'app-nutricionista-experience',
  templateUrl: './nutricionista-experience.component.html',
  styleUrls: ['./nutricionista-experience.component.css']
})
export class NutricionistaExperienceComponent implements OnInit {

  experiences : any [] = []
  constructor(private _nutrivService : NutrivService) { }

  ngOnInit(): void {
    this.experiences=[];
    this._nutrivService.getExperiences().subscribe(
      (response : any[]) =>{
        this.experiences = response
        console.log(this.experiences)
      }
    )
  }
  deleteExperience(id : number) {
    this._nutrivService.deleteExperience(id).subscribe(
      response => this.ngOnInit()
    )
  }

  UpdateExperience(id: number, data: string ){
    this._nutrivService.UpdateExperience(id,data).subscribe(
      response => this.ngOnInit()
    )
  }
}
