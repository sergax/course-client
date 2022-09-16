import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from "../navbar/event-emitter.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened: boolean = false;
  isAuthenticated: boolean = false;

  constructor(
    private eventEmitterService: EventEmitterService,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeOpenSidebar.subscribe((name:string) => {
        this.onOpen();
      });
    }
    this.isAuthenticated = this.authService.getIsAuth();
  }

  private onOpen() {
    this.opened = true;
  }
}
