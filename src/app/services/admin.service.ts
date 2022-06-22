import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAccounts() : Observable<any>{
    return this.http.get('https://localhost:7263/api/Profile');
  }

  deleteAccount(id:any) : Observable<any> {
    return this.http.delete(`https://localhost:7263/api/Profile/${id}`);
  }

  getSubscriptions() : Observable<any> {
    return this.http.get('https://localhost:7263/api/Subscription')
  }

  updateSubscription(data:any, id:any) : Observable<any> {
    return this.http.put(`https://localhost:7263/api/Subscription/${id}`,data)
  }

  deleteSubscription( id:any) : Observable<any> {
    return this.http.delete(`https://localhost:7263/api/Subscription/${id}`);
  }

}
