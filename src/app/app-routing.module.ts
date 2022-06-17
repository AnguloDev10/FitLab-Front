import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./core/authentication/authentication.component";
import {RegisterComponent} from "./core/authentication/register/register.component";
import {LoginComponent} from "./core/authentication/login/login.component";
import {ClienteDashboardComponent} from "./views/cliente/cliente-dashboard/cliente-dashboard.component";
import {ClienteHomeComponent} from "./views/cliente/cliente-home/cliente-home.component";
import {ClienteDietsComponent} from "./views/cliente/cliente-diets/cliente-diets.component";

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
  },
  {
    path: 'customerDashboard', component: ClienteDashboardComponent,
    children: [
      {path: 'customerHome',component: ClienteHomeComponent},
      {path: 'customerDiets',component: ClienteDietsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
