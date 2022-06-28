import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import{Diet} from "../model/diet";


@Injectable({
  providedIn: 'root'
})
export class NutrivService {

  private baseUrl: string=environment.baseUrl;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

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

  // Create Diet
  createItem(item: any): Observable<Diet> {
    return this.http.post<Diet>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Diet by Id
  getItem(id: any): Observable<Diet> {
    return this.http.get<Diet>(`https://localhost:7062/api/diets/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Diet Data
  getList(): Observable<Diet>{
    return this.http.get<Diet>(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  addDiet(diet: Diet): Observable<Diet>{
    return this.http.post<Diet>(this.baseUrl, diet);
  }
  // Update Diet
  updateItem(id: any, item: any): Observable<Diet>{
    return this.http.put<Diet>(`${this.baseUrl}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Diet
  deleteItem(id: any): Observable<any> {
    return this.http.delete<Diet>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
