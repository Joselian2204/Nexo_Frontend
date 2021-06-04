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
      return this.http.get<any>(this.url+`/pharmacy`,{
        headers: this.headers
      })
    }
    addPharmacy(pharmacy: any): Observable<any>{
      return this.http.post<any>(this.url+`/pharmacy`,pharmacy,{
        headers: this.headers,
  
      })
    }
    delete(path: String): Observable<any>{
      return this.http.delete<any>(this.url+path,{
        headers: this.headers,
  
      })
    }

}