import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
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
     getPharmacy(): Observable<any>{
      var comple="";
      return this.http.get<any>(this.url+`/pharmacy`+comple,{
        headers: this.headers
      })
    }
}