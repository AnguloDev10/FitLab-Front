import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Account} from "../../../model/Usuario";
import {AdminService} from "../../../services/admin.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  Roles: any = ['Admin', 'Nutricionista', 'Cliente'];
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
    this._authService.register(this.form.value).subscribe(
      response=> {
        this.router.navigate(['/adminDashboard/adminHome'])
      }
    )
  }

}
