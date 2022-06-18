import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRootObject } from '../shared/models/account';
import { IUser } from '../shared/models/user';
import { StorageService } from './storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _storage:StorageService) { }

  login(user:IUser):Observable<IRootObject>{
    return this._http.post<IRootObject>('https://localhost:7263/api/Account',user).pipe(map(response => {
      this._storage.setItem('user',response);
      return response;
    }));
  }


}
