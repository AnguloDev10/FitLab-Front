import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./core/authentication/authentication.component";

const routes: Routes = [
  {path:'',redirectTo:'/authentication',pathMatch:'full'},
  {path:'authentication',component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
