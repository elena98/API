import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = "http://localhost:8000/api/contact-source";



@Injectable({
  providedIn: 'root'
})
export class RestApiService {
 
  constructor(private http: HttpClient) { }
    getData(): Observable<any> {
        //this.http.get(apiUrl);
        return forkJoin(this.http.get(apiUrl));
      }
 
}
