import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Health } from '../models/health';
@Injectable({
  providedIn: 'root'
})
export class HealthService {
  url: string = 'http://localhost:8080/';
  locations: Health[] = [];
  constructor(private http: HttpClient) { }
  getHealth(path:string):Observable<any>{
    return this.http.get<any>(this.url+path);
  }
}
