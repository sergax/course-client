import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {CourseService} from "../course/course.service";
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

  }

  ngOnInit(): void {
    this.authService.loginSubject.subscribe(value => {
      this.isAuth = value;
    })
  }

  onLogout() {
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
