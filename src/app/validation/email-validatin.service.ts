import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatinService{

  constructor() { }

  static emailvalidation(control : AbstractControl) : ValidationErrors | null{
    let value = control.value;
    let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let isemailValid = regex.test(value);

    return !isemailValid ? {emailError : 'Invalid email'} : null
  }
}
