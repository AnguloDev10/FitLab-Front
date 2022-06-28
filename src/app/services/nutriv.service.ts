import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import{Diet} from "../model/diet";
import {Experience} from "../model/Experience";
import {Schedule} from "../model/Schedule";

@Injectable({
  providedIn: 'root'
})
export class NutrivService {

  private baseUrl: string=environment.baseUrl;
  private baseUrl_: string=environment.baseUrl_;
  private base_: string=environment.base_;
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

  // Create Experiences
  createItem_(item: any): Observable<Experience> {
    return this.http.post<Experience>(this.baseUrl_, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Diet by Id
  getItem_(id: any): Observable<Experience> {
    return this.http.get<Experience>(`https://localhost:7062/api/experiences/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Diet Data
  getList_(): Observable<Experience>{
    return this.http.get<Experience>(this.baseUrl_)
      .pipe(retry(2), catchError(this.handleError));
  }

  addExperience(experience: Experience): Observable<Experience>{
    return this.http.post<Experience>(this.baseUrl_, experience);
  }
  // Update Experience
  updateItem_(id: any, item: any): Observable<Experience>{
    return this.http.put<Experience>(`https://localhost:7062/api/experiences/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Experience
  DeleteItem_(id: any): Observable<any> {
    return this.http.delete<Experience>(`${this.baseUrl_}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


//Create Schedule
  createItemS(item: any): Observable<Schedule> {
    return this.http.post<Schedule>(this.base_, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getItemS(id: any): Observable<Schedule> {
    return this.http.get<Schedule>(`https://localhost:7062/api/schedules/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }

  getListS(): Observable<Schedule>{
    return this.http.get<Schedule>(`https://localhost:7062/api/schedules`)
      .pipe(retry(2), catchError(this.handleError));
  }

  addSchedule(schedule: Schedule): Observable<Schedule>{
    return this.http.post<Schedule>(this.base_, schedule);
  }

  updateItemS(id: any, item: any): Observable<Schedule>{
    return this.http.put<Schedule>(`${this.base_}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteItemS(id: any): Observable<any> {
    return this.http.delete<Schedule>(`${this.base_}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
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