import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLoading = false;
    exform!: FormGroup;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.exform = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
        });
    }

    onLogin() {
        this.isLoading = true;
        this.authService.login(this.exform.value.email, this.exform.value.password);
    }

    get email() {
        return this.exform.get('email');
    }

    get password() {
        return this.exform.get('password');
    }
}
