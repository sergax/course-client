import {Component, OnInit} from '@angular/core';
import {AuthService} from "./component/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Welcome students 🚀"

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
