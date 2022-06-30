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
import {ManageSubscriptionComponent} from "./views/administrador/manage-subscription/manage-subscription.component";
import {EditSubscriptionComponent} from "./views/administrador/edit-subscription/edit-subscription.component";
import {AdminPerfilComponent} from "./views/administrador/admin-perfil/admin-perfil.component";
import {ChoSubsComponent} from "./views/cliente/cho-subs/cho-subs.component";
import {ClienteHomeComponent} from "./views/cliente/cliente-home/cliente-home.component";
import {ReunionComponent} from "./views/cliente/reunion/reunion.component";


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
      {path: 'adminProfile',component: AdminPerfilComponent },
      {path: 'manageAccounts',component: ManageAccountsComponent},
      {path: 'managePlans',component: ManageSubscriptionComponent},
      {path: 'editPlan/:id',component: EditSubscriptionComponent }
    ]
  },
  {
    path: 'clienteDashboard', component: ClienteDashboardComponent,
    children: [
      {path: 'nutri-list',component: NutriListComponent},
      {path: 'choose-sub/:id',component: ChoSubsComponent},
      {path: 'clientHome',component: ClienteHomeComponent},
      {path: 'nuevareunion/:id',component: ReunionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
