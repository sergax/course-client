import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isEmailTaken: boolean = false;

  registrationForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

    this.registrationForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmPassword' : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onRegistration() {
      this.authService.register(
        this.registrationForm.value.firstName,
        this.registrationForm.value.lastName,
        this.registrationForm.value.email,
        this.registrationForm.value.password
      ).subscribe(value => {
          this.router.navigate(['confirmation'], {
            queryParams: {
              email: this.registrationForm.value.email
            },
            queryParamsHandling: 'merge',
          });
      }, error => {
          if (error.status == 400) {
            this.isEmailTaken = true;
          }
        }
      );
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

}
