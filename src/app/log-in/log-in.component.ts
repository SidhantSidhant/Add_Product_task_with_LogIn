import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';
import { EmailValidatinService } from '../validation/email-validatin.service';
import { PasswordValidatinService } from '../validation/password-validatin.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm !: FormGroup;

  constructor(private _authservice : AuthService,
      private _router : Router
    ) { }

  ngOnInit(): void {
    this.createLogInForm()
  }

  createLogInForm(): void {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, EmailValidatinService.emailvalidation]),
      password: new FormControl(null, [Validators.required,PasswordValidatinService.passwordValid])
    })
    
  }

  loginformSubmit() {
    this._authservice.isUserLogIn(this.formControls['email'].value, this.formControls['password'].value)
    this._router.navigate(['/products']);
    this.logInForm.reset()
  }

get formControls(){
   return this.logInForm.controls;
}
}
