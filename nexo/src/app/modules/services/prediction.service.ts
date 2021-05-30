import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Prediction } from '../models/prediction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  url: string = 'http://localhost:8080/';
  data: Prediction[] = [];
  constructor(private http: HttpClient) { }
  getPrediction(path:string, cant: any, filter: any):Observable<any>{
    const params = new HttpParams()
    .set('cant', cant)
    .set('filter', filter);
    return this.http.get<any>(this.url+path,{params});
  }
}
