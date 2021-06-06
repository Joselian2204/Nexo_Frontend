import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Location } from '../models/location';
import { Observable } from 'rxjs';
import {url} from '../lib/URL';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations: Location[] = [];
  constructor(private http: HttpClient) { }
  getLocation(path:string):Observable<any>{
    return this.http.get<any>(url+path);
  }
}
