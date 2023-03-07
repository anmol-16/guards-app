import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import {Observable} from 'rxjs';
import { LocalStorageService } from "./localStorage.service";

@Injectable({
    providedIn:'root'
})
export class HomeGuard implements CanActivate {
    constructor(
      // private authService : AuthService, 
      private router:Router, 
      private localStorageService:LocalStorageService){}
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
      if(this.localStorageService.getItem("loggedInStatus") == "true"){
        return true;
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
    }
}