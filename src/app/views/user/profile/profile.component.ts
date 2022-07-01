import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ProfileService } from '../../../services/profile/profile.service';
import { IRootObject } from '../../../shared/models/account';
import { FormGroup } from '@angular/forms';
import { basic_information_factory } from './factory/basic-profile';
import { profesional_information_factory } from './factory/profesional-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number = 0;
  formBasicDates:FormGroup;
  professionalDates:FormGroup;
  profileData:any;

  constructor(private route: ActivatedRoute, private _profileService: ProfileService, private _profileSerive:StorageService) { }

  async ngOnInit(): Promise<void> {
    this.createProfessionalForm();
    this.createFormGroup();
    await this.getIdFromParams();
    this.getProfileyId();
  }

  createFormGroup(){
    this.formBasicDates = basic_information_factory();
    this.formBasicDates.disable();
  }

  async getIdFromParams() {
    this.route.params.subscribe(params => {
      this.id = params["id"] ?? 0;
    });
  }

  getProfileyId(){
    debugger
    let currentProfile = this._profileSerive.getItem("user") as IRootObject;
    if(currentProfile.id == this.id || this.id == 0){
      this.profileData = currentProfile;
      this.formBasicDates?.patchValue(currentProfile);
      return;
    }
    this._profileService.get(this.id).subscribe(response=>{
      this.profileData = response;
      this.formBasicDates?.patchValue(response);
    },error=>{
      
    })
  }

  createProfessionalForm(){
    this.professionalDates = profesional_information_factory();
    this.professionalDates.disable();
  }

  selectTab(number: number) {
    
  }
}
