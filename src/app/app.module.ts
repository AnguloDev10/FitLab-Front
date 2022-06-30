import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/authentication/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from "./shared/header/header.component";
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { RegisterComponent } from './core/authentication/register/register.component';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ManageAccountsComponent } from './views/administrador/manage-accounts/manage-accounts.component';
import {MatTableModule} from "@angular/material/table";
import { AdminHomeComponent } from './views/administrador/admin-home/admin-home.component';
import { AdminDashboardComponent } from './views/administrador/admin-dashboard/admin-dashboard.component';
import { SideadminComponent } from './shared/sideadmin/sideadmin.component';
import { SideclientComponent } from './shared/sideclient/sideclient.component';
import { SidenutriComponent } from './shared/sidenutri/sidenutri.component';
import { NutriCardComponent } from './shared/nutri-card/nutri-card.component';
import { ClienteDashboardComponent } from './views/cliente/cliente-dashboard/cliente-dashboard.component';
import { NutriListComponent } from './views/cliente/nutri-list/nutri-list.component';
import { CreateSessionComponent } from './views/cliente/create-session/create-session.component';
import { ClienteHomeComponent } from './views/cliente/cliente-home/cliente-home.component';
import { ManageSubscriptionComponent } from './views/administrador/manage-subscription/manage-subscription.component';
import { EditSubscriptionComponent } from './views/administrador/edit-subscription/edit-subscription.component';
import { AdminPerfilComponent } from './views/administrador/admin-perfil/admin-perfil.component';
import { ChoSubsComponent } from './views/cliente/cho-subs/cho-subs.component';
import { ReunionComponent } from './views/cliente/reunion/reunion.component';
import { ReunionFormComponent } from './shared/reunion-form/reunion-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { LocalDateTimePipe } from './pipe/local-date-time.pipe';
import { ReuListComponent } from './views/cliente/reu-list/reu-list.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
//import { ClienteComponent } from './views/cliente/cliente.component';
//import { DashboardComponent } from './views/cliente/dashboard/dashboard.component';
//import { NutricionistaComponent } from './views/nutricionista/nutricionista.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    RegisterComponent,
    ManageAccountsComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    SideadminComponent,
    SideclientComponent,
    SidenutriComponent,
    NutriCardComponent,
    ClienteDashboardComponent,
    NutriListComponent,
    CreateSessionComponent,
    ClienteHomeComponent,
    ManageSubscriptionComponent,
    EditSubscriptionComponent,
    AdminPerfilComponent,
    ChoSubsComponent,
    ReunionComponent,
    ReunionFormComponent,
    LocalDateTimePipe,
    ReuListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
