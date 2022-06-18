import {Component, Input, OnInit} from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from '../../../shared/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading=false;
  @Input() userData = {Username: '', Password:''};

  constructor(private router : Router, private fb:FormBuilder,  private _authService:AuthService, private _router:Router) {
    this.form = this.fb.group({
      user:['', Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  showpass(x:any,text:any){
    if (x.type === "password") {
      x.type = "text";
      text.text = "Hide"
    } else {
      text.text ="Show";
      x.type = "password";
    }
  }



  login(){
    const username = this.form.value.user;

    const password = this.form.value.password;

    let usuario:IUser = { userName: username, password : password};

    this._authService.login(usuario).subscribe(response=>{
      window.location.href = '/board';
    });



  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}