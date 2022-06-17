import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  Url: string = `${environment.EasyNutrition}/authentication`;
  constructor(private http : HttpClient, private router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  loginAdmin(data:any) : Observable<any> {
    return this.http.post(this.Url,data,this.httpOptions);
  }

}
