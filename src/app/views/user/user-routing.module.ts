import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../administrador/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile/:id',component: AdminDashboardComponent,
    children: [
      {path: '',component: ProfileComponent}
    ]
  },
  {
    path: 'profile',component: AdminDashboardComponent,
    children: [
      {path: '',component: ProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
