import {Component, Input, OnInit} from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from '@angular/router';
import {AuthClienteService} from "../../../services/cliente/auth/auth-cliente.service";
import {AuthNutriService} from "../../../services/nutricionista/auth/auth-nutri.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading=false;
  @Input() userData = {Username: '', Password:''};

  constructor(private router : Router, private fb:FormBuilder, private _authclient: AuthClienteService, _authnutri: AuthNutriService ) {
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

    let usuario = { email: username, password : password};

    //recibo pass y username
    this._authclient.loginCustomer()

    //valido el code 200
    //recibo response
    //pregunto tipo de usuario



  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
