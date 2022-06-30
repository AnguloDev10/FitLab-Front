import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ItypeNutritions } from '../../shared/models/type-nutritionist';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = environment.EasyNutrition;
  constructor(private _http: HttpClient) { }

  get(id:number): Observable<any> {
    return this._http.get<any>(`${this.url}Profile/${id}`);
  }

  getAll(): Observable<any> {
    return this._http.get<any>(`${this.url}Profile`);
  }
  
  getByFilter(model:ItypeNutritions): Observable<any> {
    debugger
    return this._http.post<any>(`${this.url}Profile/GetFilter`,model);
  }
  
  
  putProfile(model:any): Observable<any> {
    debugger
    return this._http.put<any>(`${this.url}Profile/UpdateStatus/${model.id}`,model);
  }

  put(id:number,profile:any){
    return this._http.put<any>(`${this.url}Profile/${id}`,profile);
  }
}
