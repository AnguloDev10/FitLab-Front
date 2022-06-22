import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IListProfile } from '../../shared/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = environment.urlBack;
  constructor(private _http: HttpClient) { }

  get(id:number): Observable<any> {
    return this._http.get<any>(`${this.url}Profile/${id}`);
  }

  getAll(): Observable<any> {
    return this._http.get<any>(`${this.url}Profile`);
  }
}
