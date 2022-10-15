import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isAuth: boolean = false
    title = "Welcome students 🤓"

    constructor(
        private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.autoAuthUser();
        this.authService.loginSubject.subscribe(value => {
            this.isAuth = value;
        })
    }

}
