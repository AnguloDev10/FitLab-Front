import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Account} from "../../../model/Usuario";
import {AdminService} from "../../../services/admin.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  Roles: any = ['Administrador', 'Nutricionista', 'Cliente'];
  constructor(private router : Router,  private _authService: AuthService, private fb:FormBuilder) {
    this.form = this.fb.group({
      name:['', Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
      age:['',Validators.required],
      rol:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  register() {
    console.log(this.form.value)
    if(this.form.value.rol == 'Administrador'){
      this._authService.register(this.form.value).subscribe(
        response=> {
          Swal.fire("Create successfully","Click close button to back to the login page","success").then(result =>{
            this.router.navigate(['/adminDashboard/adminHome'])
          })
        }
      )
    }
    if(this.form.value.rol == 'Nutricionista'){
      this._authService.register(this.form.value).subscribe(
        response=> {
          Swal.fire("Create successfully","Click close button to back to the login page","success").then(result =>{
            this.router.navigate(['/adminDashboard/choose-sub'])
          })
        }
      )
    }
    if(this.form.value.rol == 'Cliente'){
      this._authService.register(this.form.value).subscribe(
        response=> {
          Swal.fire("Create successfully","Click close button to back to the login page","success").then(result =>{
            this.router.navigate(['/clienteDashboard/choose-sub'])
          })
        }
      )
    }



  }

}
