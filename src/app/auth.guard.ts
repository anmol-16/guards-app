import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import {Observable} from 'rxjs';
import { LocalStorageService } from "./localStorage.service";
import { FormsDataService } from "./services/forms-data.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
    constructor(

      private router:Router, 
      private localStorageService:LocalStorageService,
      ){}
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
      // this.localStorageService.setItem("loggedInStatus","true");
      if(this.localStorageService.getItem("loggedInStatus") == "true"){
        this.router.navigate(['/home']);
        console.log("after the valid navigation to home");
        return false;
      }
      else{
        return true;
      }
    }
}