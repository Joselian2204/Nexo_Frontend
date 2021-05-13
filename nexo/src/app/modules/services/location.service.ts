import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../models/location';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string = 'http://localhost:8080/';
  locations: Location[] = [];
  constructor(private http: HttpClient) { }
  getLocation(path:string):Observable<any>{
    return this.http.get<any>(this.url+path);
  }
}
