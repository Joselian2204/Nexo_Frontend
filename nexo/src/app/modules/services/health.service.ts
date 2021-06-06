import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Health } from '../models/health';
import {url} from '../lib/URL';
@Injectable({
  providedIn: 'root'
})
export class HealthService {
  locations: Health[] = [];
  constructor(private http: HttpClient) { }
  getHealth(path:string):Observable<any>{
    return this.http.get<any>(url+path);
  }
}
