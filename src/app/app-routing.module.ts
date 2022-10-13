import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth/auth.guard";

import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {EmailConfirmationComponent} from "./auth/email-confirmation/email-confirmation.component";
import {CourseComponent} from "./course/course.component";
import {CourseDetailComponent} from "./course/course-detail/course-detail.component";
import {CourseUpdateComponent} from "./course/course-update/course-update.component";
import {CourseCreateComponent} from "./course/course-create/course-create.component";
import {ContentCreateComponent} from "./content/content-create/content-create.component";
import {CommonModule} from "@angular/common";
import {ContentComponent} from "./content/content.component";
import {ContentDetailComponent} from "./content/content-detail/content-detail.component";
import {ContentUpdateComponent} from "./content/content-update/content-update.component";
import {CourseInformation} from "./model/courseinformation.model";
import {CoursesPublicComponent} from "./course/courses-public/courses-public.component";


let routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'confirmation', component: EmailConfirmationComponent},
  {path: 'courses', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'public', component: CoursesPublicComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CourseCreateComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id', component: CourseDetailComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id', component: CourseUpdateComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id/students', component: CourseInformation, canActivate: [AuthGuard]},
  {path: 'courses/:id/info', component: CourseInformation, canActivate: [AuthGuard]},
  {path: 'courses/:courseId/contents', component: ContentCreateComponent, canActivate: [AuthGuard]},
  {path: 'courses/contents/:id', component: ContentDetailComponent, canActivate: [AuthGuard]},
  {path: 'courses/contents/:id', component: ContentUpdateComponent, canActivate: [AuthGuard]},
  {path: '', component: CoursesPublicComponent}
]

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
