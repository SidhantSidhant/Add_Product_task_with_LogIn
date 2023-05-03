import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userlogin: boolean = false;

  constructor(private _productsservice: ProductsService,  private _router : Router) { }

  isAuthentication() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userlogin = localStorage.getItem("email") ? true : false; 
      resolve(this.userlogin)
    })
  }

  userLogInStatus() {
    return this.userlogin;
  }

  isUserLogIn(email: string, password: string) {
    this.userlogin = true;
    this._productsservice.getProductsData().pipe(
      map((res: any) => {
        res.forEach((element: any) => {
          if (element.login.email === email && element.login.password === password) {
            localStorage.setItem("email", email);
            this._router.navigate(['/products']);
            return res;
          } else {
            return confirm("Invalid User name Or password")
          }
        })
      })
    ).subscribe(() => {
    })
  }

  isUserLogOut() {
    this.userlogin = false;
    localStorage.removeItem("email");
  }
}
