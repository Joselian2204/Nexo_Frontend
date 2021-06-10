import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Prediction } from '../models/prediction';
import { Observable } from 'rxjs';
import { url } from '../lib/URL';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  data: Prediction[] = [];
  constructor(private http: HttpClient) { }
  getPrediction(path:string, cant: any, filter: any):Observable<any>{
    const params = new HttpParams()
    .set('cant', cant)
    .set('filter', filter);
    return this.http.get<any>(url+"prediction/"+path,{params});
  }
  getVariables(path:string, filter: any):Observable<any>{
    const params = new HttpParams()
    .set('filter',filter);
    return this.http.get<any>(url+"prediction/"+path,{params});
  }
}
