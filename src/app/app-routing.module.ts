import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth/auth.guard";

import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {EmailConfirmationComponent} from "./auth/email-confirmation/email-confirmation.component";
import {CourseComponent} from "./course/course.component";
import {CourseDetailComponent} from "./course/courseDetail/course-detail.component";

let routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'confirmation', component: EmailConfirmationComponent},
  {path: 'courses', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id', component: CourseDetailComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
