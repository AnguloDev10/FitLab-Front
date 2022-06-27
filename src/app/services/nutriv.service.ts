import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NutrivService {

  private baseUrl: string=environment.baseUrl;
  constructor(private http: HttpClient) { }

  getExperiences() : Observable<any> {
    return this.http.get('https://localhost:7062/api/experiences')
  }

  deleteExperience(id:any) : Observable<any> {
    return this.http.delete(`https://localhost:7062/api/experiences/${id}`);
  }

  UpdateExperience(id:any, data:any) : Observable<any> {
    return this.http.put(`https://localhost:7062/api/experiences/${id}`,data)
  }

  getSchedule() : Observable<any> {
    return this.http.get('https://localhost:7062/api/schedules')
  }

  UpdateSchedule(id:any, data:any) : Observable<any> {
    return this.http.put(`https://localhost:7062/api/schedules/${id}`,data)
  }

  deleteSchedule(id:any) : Observable<any> {
    return this.http.delete(`https://localhost:7062/api/schedules/${id}`);
  }
}
