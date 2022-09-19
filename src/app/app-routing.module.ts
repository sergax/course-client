import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth/auth.guard";

import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {EmailConfirmationComponent} from "./auth/email-confirmation/email-confirmation.component";
import {CoursesComponent} from "./component/courses/courses.component";
import {CoursedetailComponent} from "./component/coursedetail/coursedetail.component";


let routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'confirmation', component: EmailConfirmationComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course/:id', component: CoursedetailComponent},
  {path: '**', component: CoursesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
