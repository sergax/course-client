import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {AuthService} from "./auth/auth.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AngularMaterialModule} from "./angular-material.module";
import {CommonModule} from "@angular/common";
import {AuthModule} from "./auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CourseService} from "./course/course.service";
import {CourseComponent} from "./course/course.component";
import {CourseDetailComponent} from "./course/courseDetail/course-detail.component";
import {UserComponent} from "./user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    CourseDetailComponent,
    UserComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
