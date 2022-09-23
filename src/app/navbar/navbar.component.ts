import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {EventEmitterService} from "./event-emitter.service";
import {Course} from "../model/course.model";
import {CourseService} from "../course/course.service";
import {User} from "../model/user.model";
import {CourseCreateComponent} from "../course/course-create/course-create.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private authService: AuthService,
              private courseService: CourseService,
              private dialog: MatDialog) {
    this.authService.loginSubject.subscribe(value => {
      this.isAuth = value;
    })
  }

  ngOnInit(): void {

  }

  onLogout() {
    ``
    this.authService.logout();
  }

  onCreate() {
    this.dialog.open(CourseCreateComponent, {
      width: '330px',
      disableClose: true,
      data: {
      }
    })
  }

}
