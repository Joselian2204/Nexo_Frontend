import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService} from './local-storage.service';
import { Observable } from 'rxjs';


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
     getPharmacy(): Observable<any>{

      var comple="";
      return this.http.get<any>(this.url+`/hospital`+comple,{
        headers: this.headers
      })
    }
}
