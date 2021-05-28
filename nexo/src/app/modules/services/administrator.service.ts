import { Injectable } from '@angular/core';
import { LocalStorageService} from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Administrator } from '../models/administrator'
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

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

  login(admi: Administrator):Observable<any>{
    console.log(admi)
    return this.http.post<any>(this.url+`/administrator/login`,admi,{ observe: 'response' });

  }

}
