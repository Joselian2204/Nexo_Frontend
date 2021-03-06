import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService} from './local-storage.service';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital';
import {url} from '../lib/URL';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  authToken: string = "";
  headers: any;
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.authToken = this.localStorageService.getToken();
      console.log(this.authToken);
      this.headers = new HttpHeaders({
        Authorization: this.authToken
      })
     }
     getHospital(): Observable<any>{
      return this.http.get<any>(url+`hospital`,{
        headers: this.headers
      })
    }
    addHospital(hospital: any): Observable<any>{
      return this.http.post<any>(url+`hospital`,hospital,{
        headers: this.headers,
  
      })
    }
    delete(path: String): Observable<any>{
      return this.http.delete<any>(url+path,{
        headers: this.headers,
  
      })
    }
    update(hospital: any): Observable<any>{
      return this.http.put<any>(url+`hospital`,hospital,{
        headers: this.headers,
  
      })
    }
}
