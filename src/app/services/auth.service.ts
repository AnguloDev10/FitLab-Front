
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {IRootObject} from "../model/Account";
import {Account, Perfil} from "../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  login(user:Account):Observable<IRootObject>{
    return this._http.post<IRootObject>('https://localhost:7263/api/Account',user).pipe(map(response => {
      //this._storage.setItem('user',response);
      return response;
    }));
  }
  register(user:any) : Observable<any>{
    return this._http.post<any>('https://localhost:7263/api/Profile',user).pipe(map(response => {
      //this._storage.setItem('user',response);
      return response;
    }));
  }
}
