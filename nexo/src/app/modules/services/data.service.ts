import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Data } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:8080/';
  data: Data[] = [];
  constructor(private http: HttpClient) { }
  getData(path:string, date1: any, date2: any):Observable<any>{
    const params = new HttpParams()
    .set('date1', date1)
    .set('date2', date2);
    return this.http.get<any>(this.url+path,{params});
  }
}