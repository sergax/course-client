import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {UserService} from "./user.service";
import {User} from "../model/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: Array<User>

  constructor(
    public userService: UserService,
    private authService: AuthService) {

    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    )
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
