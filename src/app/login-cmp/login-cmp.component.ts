import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage.service';
import { FormsDataService } from '../services/forms-data.service';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.css']
})
export class LoginCmpComponent {
  loggedInStatus : string = "";
  constructor(
    private localStorageService: LocalStorageService,
    private router:Router
    ){}
  updateStatus(){
    this.loggedInStatus = "true";
    this.localStorageService.setItem("loggedInStatus",this.loggedInStatus);
  }
  signUpUser(){
    if(this.localStorageService.getItem("loggedInStatus") =="true" ){
      this.router.navigate(['/home']);
    }
    else{
      this.router.navigate(['/regoptions']);
    }
  }
}
