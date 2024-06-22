import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgotpasswordComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
