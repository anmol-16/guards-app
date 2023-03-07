import { Injectable, Inject } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class LocalStorageService {
  
    setItem(key: string, value: any) {
      localStorage.setItem(key,value);
    }
    getItem(key:string){
       let res = localStorage.getItem(key);
       return res;
    }
  
  }
  