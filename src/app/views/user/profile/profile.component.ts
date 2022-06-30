import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ProfileService } from '../../../services/profile/profile.service';
import { IRootObject } from '../../../shared/models/account';
import { FormGroup } from '@angular/forms';
import { basic_information_factory } from './factory/basic-profile';
import { profesional_information_factory } from './factory/profesional-profile';
import Swal from 'sweetalert2';

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
  isEditing:boolean= false;

  constructor(private route: ActivatedRoute, private _profileService: ProfileService, private _storageSerive:StorageService) { }

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
    let currentProfile = this._storageSerive.getItem("user") as IRootObject;
    if(currentProfile.id == this.id || this.id == 0){
      this.formBasicDates.enable();
      this.isEditing = true;
      this.profileData = currentProfile;
      this.formBasicDates?.patchValue(currentProfile);
      this.id =Number(currentProfile.id);
      return;
    }
    this._profileService.get(this.id).subscribe(response=>{
      this.profileData = response;
      this.formBasicDates?.patchValue(response);
    })
  }

  createProfessionalForm(){
    this.professionalDates = profesional_information_factory();
    this.professionalDates.disable();
  }

  updateProfileInfo(){
    let client =  this.formBasicDates.value;
    client["Id"] = this.id;
    client["rol"] =  this.profileData.rol;
    client["Password"] =  this.profileData.password ;
    this._profileService.put(this.id,client).subscribe((response)=>{
      this._storageSerive.setItem("user",response.request)
      this.confirmSave();
    })
  }

  confirmSave(){
    Swal.fire("Se actualizó éxitosamente","click en el botón para cerrar","success").then(result =>{
      console.log(result);
    })
  }

}
