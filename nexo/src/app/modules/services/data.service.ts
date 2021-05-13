import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:8080/';
  data: Data[] = [];
  constructor(private http: HttpClient) { }
  getData(path:string):Observable<any>{
    return this.http.get<any>(this.url+path);
  }
}