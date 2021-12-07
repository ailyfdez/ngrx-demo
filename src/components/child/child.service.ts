import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
//import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class ChildService {
    constructor(/*private http: HttpClient*/) { }
  
    public getUser(): Observable<string> {
        return of("Endava");
     // return this.http.get<string>('api/user');
    }
}