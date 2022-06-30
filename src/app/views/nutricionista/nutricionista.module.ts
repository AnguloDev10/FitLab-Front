import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutricionistaRoutingModule } from './nutricionista-routing.module';
import { UserProgressComponent } from './user-progress/user-progress.component';
import { UserModule } from '../user/user.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserProgressComponent
  ],
  imports: [
    CommonModule,
    NutricionistaRoutingModule,
    UserModule,
    ReactiveFormsModule
  ]
})
export class NutricionistaModule { }
