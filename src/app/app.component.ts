import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalStorageService } from './localStorage.service';
import { RandomDataResolverService } from './services/resolver.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'guards-app';
  dataSource = "true";
  
  constructor(
    private router:Router,
    private localStorageService: LocalStorageService){}

  ngOnInit(){
    
  }
}
