import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading=false;
  constructor(private fb:FormBuilder ) {
    this.form = this.fb.group({

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

  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
