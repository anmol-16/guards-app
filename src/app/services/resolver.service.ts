import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RandomDataService } from './random-data.service';

@Injectable({
  providedIn: 'root'
})
export class RandomDataResolverService implements Resolve<any> {

  constructor(private randomData: RandomDataService) {}
    
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.randomData.get();
  }
}
