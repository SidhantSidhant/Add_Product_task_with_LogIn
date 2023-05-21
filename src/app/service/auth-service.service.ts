import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userlogin: boolean = false;

  constructor(private _productsservice: ProductsService, private _router: Router) { }

  isAuthentication(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userlogin = localStorage.getItem("email") ? true : false;
      resolve(this.userlogin)
    })
  }

  userLogInStatus() {
    return this.userlogin;
  }

  isUserLogIn(email: string, password: string) {

    this._productsservice.getProductsData().subscribe((data) => {
      let proutSigleobj = data.find((element: any) => {
        return element.login?.email === email && element.login?.password === password
      })
      if (proutSigleobj) {
          localStorage.setItem("email", email);
          this._router.navigate(['/products']);
          this.userlogin = true;
          return proutSigleobj;
      } else {
        alert("Please eter pthe proper email addres")
      }
    })
  }

  isUserLogOut() {
    this.userlogin = false;
    localStorage.removeItem("email");
  }
}
