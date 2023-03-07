import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import {Observable} from 'rxjs';
import { FormsDataService } from "./services/forms-data.service";

@Injectable({
    providedIn:'root'
})
export class AuthLearnerGuard implements CanActivate {
    userType:any =''
    constructor(
      private router:Router, 
      private formsDataService:FormsDataService
      ){}
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
        console.log(route.url[0].path,"routeurl value");
        
        if(route.url[0].path === "register-learner"){
            if(this.formsDataService.completeForm.category){
                this.formsDataService.completeForm.category = 'Learner';
                return true;
            }
            this.formsDataService.completeForm.category = 'Learner';
            this.router.navigate(['/learner-age-check']);
            return false;
        }
        
        else if(route.url[0].path === "register-teacher"){
            this.formsDataService.completeForm.category = 'Teacher';
            return true;
        }
        else if(route.url[0].path === "register-parent"){
            this.formsDataService.completeForm.category = 'Parent';
            return true;
        }
        else{
            return false;
        }
    }
}