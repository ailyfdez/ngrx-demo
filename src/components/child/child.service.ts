import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
//import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class ChildService {
    constructor(/*private http: HttpClient*/) { }
  
    public getAmount(): Observable<number> {
        return of(10);
     // return this.http.get<string>('api/bank_accout/amount');
    }
}