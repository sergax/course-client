import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {LoadingService} from "./loading/loading.service";
import {UserService} from "./user/user.service";
import {User} from "./model/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user!: User
    isLoading: boolean = false
    isAuth: boolean = false
    title = "Welcome students 🤓"

    constructor(
        private authService: AuthService,
        public loadingService: LoadingService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.authService.autoAuthUser();
        this.authService.loginSubject.subscribe(value => {
            this.isAuth = value;
        })
        this.loadingService.isLoading.subscribe(value =>
            this.isLoading = value
        )
        this.userService.getUser().subscribe(
            value => {
                this.user = value
            }
        )
    }

}
