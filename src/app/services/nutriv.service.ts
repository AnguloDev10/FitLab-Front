import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NutrivService {

  constructor(private http: HttpClient) { }

  getExperiences() : Observable<any> {
    return this.http.get('https://localhost:7263/api/Experience')
  }
  
  deleteExperience(id:any) : Observable<any> {
    return this.http.delete(`https://localhost:7263/api/Experience/${id}`);
  }
}
