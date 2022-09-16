import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {EventEmitterService} from "./event-emitter.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private authService: AuthService,
              private eventEmitterService: EventEmitterService) {
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

  openSideBar() {
    this.eventEmitterService.onOpenSidebarClick();
  }

}
