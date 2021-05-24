import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private token: any="";
  private accessToken: string="ACCESS_TOKEN";
  constructor() { }
  public setToken(token: string): void {
    this.removeToken();
    localStorage.setItem(this.accessToken, token);
    console.log(localStorage.getItem(this.accessToken));
    this.token = token;
  }
  public getToken(): string {
    if (!this.token) {
      this.token =localStorage.getItem(this.accessToken);
    }
    return this.token;
  }
  public removeToken(): void {
      this.token="",
      localStorage.removeItem(this.accessToken);
  }
}

