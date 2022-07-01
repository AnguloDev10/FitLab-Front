import {Component, Input, OnInit} from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from '@angular/router';
import {Account} from "../../../model/Usuario";
import {AuthService} from "../../../services/auth.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id : any
  form: FormGroup;
  loading=false;
  @Input() userData = {Username: '', Password:''};
  Roles: any = ['Administrador', 'Nutricionista', 'Cliente'];
  constructor(private router : Router,  private _authService:AuthService, private fb:FormBuilder) {
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

    let usuario:Account = { userName: username, password : password};

    this._authService.login(usuario).subscribe(response=>{
      console.log(response)
       if(response.rol ==  "Nutricionista") {
         localStorage.setItem('userid',response.id.toString());
         localStorage.setItem('email',response.email);
         localStorage.setItem('name',response.name);
         this.id = localStorage.getItem('userid');
         Swal.fire("Create successfully","Cliquea el boton para avanzar","success").then(result =>{
         })
       }
      if(response.rol ==  "Administrador") {
        localStorage.setItem('userid',response.id.toString());
        localStorage.setItem('email',response.email);
        localStorage.setItem('name',response.name);
        this.id = localStorage.getItem('userid');
        Swal.fire("Create successfully","Cliquea el boton para avanzar","success").then(result =>{

          this.router.navigate(['/adminDashboard/adminHome'])
        })
      }
      if(response.rol ==  "Cliente") {
        localStorage.setItem('userid',response.id.toString());
        localStorage.setItem('email',response.email);
        localStorage.setItem('name',response.name);
        localStorage.setItem('phone',response.phone.toString());
        localStorage.setItem('age',response.age.toString()),
        this.id = localStorage.getItem('userid');
        Swal.fire("Create successfully","Cliquea el boton para avanzar","success").then(result =>{
          this.router.navigate(['/clienteDashboard',this.id])
        })

      }

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
