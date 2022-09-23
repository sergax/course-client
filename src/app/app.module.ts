import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {AuthService} from "./auth/auth.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AngularMaterialModule} from "./angular-material.module";
import {CommonModule} from "@angular/common";
import {AuthModule} from "./auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CourseService} from "./course/course.service";
import {CourseComponent} from "./course/course.component";
import {CourseDetailComponent} from "./course/course-detail/course-detail.component";
import {UserComponent} from "./user/user.component";
import {UserService} from "./user/user.service";
import {CourseUpdateComponent} from "./course/course-update/course-update.component";
import {MatSelectModule} from "@angular/material/select";
import {UserModule} from "./user/user.module";
import {AuthInterceptor} from "./auth/auth-interceptor";
import {CourseCreateComponent} from "./course/course-create/course-create.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    CourseDetailComponent,
    CourseUpdateComponent,
    CourseCreateComponent,
    UserComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    UserModule,
    FormsModule,
    AuthModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    CourseService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
