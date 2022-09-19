import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  codeConfirmationForm!: FormGroup;
  email!: string;
  isQueryParamPresent: boolean;
  isConfirmed: boolean = false;
  isCodeWrong: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.isQueryParamPresent = false;
    this.route.queryParams
      .subscribe(params => {
        this.email = params['email']
        this.isQueryParamPresent = this.email != null;
      });
  }

  ngOnInit(): void {
    this.codeConfirmationForm = new FormGroup({
      'code' : new FormControl(null, [Validators.required, Validators.pattern('^\\d{6}$')])
    });

  }

  onConfirmation() {
    if(!this.email){
      return;
    }

    this.authService.confirmEmail(
      this.email,
      this.codeConfirmationForm.value.code
    ).subscribe(
      value => {
        this.isConfirmed = true;
      }, error => {
        this.isCodeWrong = true;
      }
    )
  }

  get code() {
    return this.codeConfirmationForm.get('code');
  }

}
