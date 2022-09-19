import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {
  RouterLink,
  RouterOutlet
} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthService} from "./component/auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./component/auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {CoursesComponent} from "./component/courses/courses.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
