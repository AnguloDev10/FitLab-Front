import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../administrador/admin-dashboard/admin-dashboard.component';
import { UserProgressComponent } from './user-progress/user-progress.component';

const routes: Routes = [
  {
    path: 'list', component: AdminDashboardComponent,
    children: [
      { path: '', component: UserProgressComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutricionistaRoutingModule { }
