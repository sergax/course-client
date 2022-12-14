import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {EmailConfirmationComponent} from './email-confirmation/email-confirmation.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {AngularMaterialModule} from "../angular-material.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {UserModule} from "../user/user.module";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    EmailConfirmationComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    UserModule,
    FormsModule,
  ]
})
export class AuthModule {
}
