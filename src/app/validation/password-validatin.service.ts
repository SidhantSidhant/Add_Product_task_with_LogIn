import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatinService {

  constructor() { }

  static passwordValid(control : AbstractControl) : ValidationErrors | null{
    let value = control.value;
    let regex =/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/;
    let ispasswordValid = regex.test(value);

    return !ispasswordValid ? {passwordError : 'Invalid password'} : null
  }
}
