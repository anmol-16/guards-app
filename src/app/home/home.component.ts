import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../localStorage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logOutStatus:String = "false";
  data:any = [];
  constructor(
    private localStorageService:LocalStorageService,
    private router:Router,
    private route: ActivatedRoute
    ){
    }
    ngOnInit(){
      this.data = this.route.snapshot.data['data'];
      console.log(this.data,"here is the data");
      
    }
  updateLogOut(){
    this.logOutStatus = "false";
    this.localStorageService.setItem("loggedInStatus",this.logOutStatus);
    this.router.navigate(['/']);
  }
}
