import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
