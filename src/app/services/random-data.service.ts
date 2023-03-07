import {Injectable} from '@angular/core'
@Injectable({
    providedIn:'root'
})
export class RandomDataService {
    data:any = [
        {
            email:"anmol.aggarwal",
            firstName:"anmol",
            lastName:"agg",
            age:22
        },
        {
            email:"lexev.v",
            firstName:"lex",
            lastName:"agg",
            age:21
        },
    ]
    get(){
        return this.data;
    }
}