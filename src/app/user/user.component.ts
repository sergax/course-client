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
  user!: User;
  isAdmin!: boolean;
  email!: string;

  constructor(
    private userService: UserService,
    private authService: AuthService) {
    this.isAdmin = authService.getIsAdmin();
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      this.email = user.email;
    });

  }
}
