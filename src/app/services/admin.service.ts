import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAccounts() : Observable<any>{
    return this.http.get('https://localhost:7263/api/Account');
  }

  deleteAccount(id:any) : Observable<any> {
    return this.http.delete(`https://localhost:7263/api/Profile/${id}`);
  }
}
