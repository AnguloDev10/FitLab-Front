import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./core/authentication/authentication.component";
import {RegisterComponent} from "./core/authentication/register/register.component";
import {LoginComponent} from "./core/authentication/login/login.component";

const routes: Routes = [

  {
    path: 'signup', component: AuthenticationComponent,
    children: [{ path: '', component: RegisterComponent }]
  },
  {
    path: 'login', component: AuthenticationComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
