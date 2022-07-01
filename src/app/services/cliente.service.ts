import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http : HttpClient) { }

  getNutricionistas() : Observable<any> {
     return this._http.get('https://localhost:7263/nutricionistas')
  }
  getSesiones(id:any) : Observable<any> {
    return this._http.get(`https://localhost:7263/api/Session/${id}`)
  }
  createSession(data:any) : Observable<any> {
    return this._http.post('https://localhost:7263/api/Session',data)
  }
  likeNutricionistas(id:any,likedid:any): Observable<any> {
    return this._http.put(`https://localhost:7263/sourceId/${id}/likedId/${likedid}`, null)
  }
  getLikedNutricionistas(id:any): Observable<any> {
   return this._http.get(`https://localhost:7263/likes/${id}`)
  }
  getSubscription(id:any):  Observable<any> {
   return this._http.get(`https://localhost:7263/api/Subscription/${id}`)
  }
  getNutricionistabyAge(minage:any, maxage:any):  Observable<any>{
    return this._http.get(`https://localhost:7263/nutribyAge?minage=${minage}&maxage=${maxage}`)
  }


}
