import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./core/authentication/authentication.component";
import {RegisterComponent} from "./core/authentication/register/register.component";
import {LoginComponent} from "./core/authentication/login/login.component";
import {AdminDashboardComponent} from "./views/administrador/admin-dashboard/admin-dashboard.component";
import {AdminHomeComponent} from "./views/administrador/admin-home/admin-home.component";
import {ManageAccountsComponent} from "./views/administrador/manage-accounts/manage-accounts.component";
import {ClienteDashboardComponent} from "./views/cliente/cliente-dashboard/cliente-dashboard.component";
import {NutriListComponent} from "./views/cliente/nutri-list/nutri-list.component";


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
    path: 'adminDashboard', component: AdminDashboardComponent,
    children: [
      {path: 'adminHome',component: AdminHomeComponent},
      {path: 'manageAccounts',component: ManageAccountsComponent}

    ]
  },
  {
    path: 'clienteDashboard', component: ClienteDashboardComponent,
    children: [
      {path: 'nutri-list',component: NutriListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
