import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { location } from '../models/location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string = 'http://localhost:8080/';
  locations: Location[] = [];
  constructor(private http: HttpClient) { }
  getLocation(path:string){
    return this.http.get<Location[]>(this.url+path).subscribe( locs => this.locations=locs);
  }
}
