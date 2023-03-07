import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsDataService{
    
    completeForm = {
      category:'',
      age:'',
      country:'',
      firstName:'',
      lastName:'',
      email:'',
      password:''
    };

    setFormData(data: any){
      this.completeForm = data;
    }
    getFormData() {
      return this.completeForm;
    }
}
