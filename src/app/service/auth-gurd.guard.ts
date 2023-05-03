import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdGuard implements CanActivate {

  constructor(private _authservice : AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    
      return this._authservice.isAuthentication().then((authenticate)=>{
          if(authenticate){
            return true;
          }else{
            return false;
          }
      })
    
  }

}
