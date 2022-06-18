import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from "./core/authentication/authentication.component";
import { RegisterComponent } from "./core/authentication/register/register.component";
import { LoginComponent } from "./core/authentication/login/login.component";
import { ProfileGuard } from './shared/guards/profile.guard';

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
    path: 'board',
    loadChildren: () => import('./views/board/board.module').then(m => m.BoardModule),
    canActivate: [ProfileGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
    canActivate: [ProfileGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
