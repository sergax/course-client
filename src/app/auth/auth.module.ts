import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserModule} from "../user/user.module";
import { RegistrationComponent } from './registration/registration.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import {AngularMaterialModule} from "../angular-material.module";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    EmailConfirmationComponent
  ],
    imports: [
        AngularMaterialModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AuthModule { }
