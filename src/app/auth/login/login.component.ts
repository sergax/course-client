import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  isAuthorized: boolean = true;

  exform!: FormGroup;

  constructor(public authService: AuthService, private router: Router) {
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
    this.authService.loginSubject.subscribe(value => {
      this.isAuthorized = value;
      if (value) {
        this.router.navigate(['profile']);
      }
    })
  }

  get email() {
    return this.exform.get('email');
  }

  get password() {
    return this.exform.get('password');
  }
}
