import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {AuthService} from "./auth/auth.service";
// import {CoursesComponent} from "./courses/courses.component";
// import {CoursedetailComponent} from "./coursedetail/coursedetail.component";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {EmailConfirmationComponent} from "./auth/email-confirmation/email-confirmation.component";
import {AngularMaterialModule} from "./angular-material.module";
import {CommonModule} from "@angular/common";
import {AuthModule} from "./auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CourseService} from "./course/course.service";
import {CourseComponent} from "./course/course.component";
import {CourseDetailComponent} from "./course/courseDetail/course-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    CourseDetailComponent
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
