import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService} from './local-storage.service';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  authToken: string = "";
  headers: any;
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.authToken = this.localStorageService.getToken();
      console.log(this.authToken);
      this.headers = new HttpHeaders({
        Authorization: this.authToken
      })
     }
     getHospital(): Observable<any>{
      return this.http.get<any>(this.url+`/hospital`,{
        headers: this.headers
      })
    }
    addHospital(hospital: any): Observable<any>{
      return this.http.post<any>(this.url+`/hospital`,hospital,{
        headers: this.headers,
  
      })
    }
}
