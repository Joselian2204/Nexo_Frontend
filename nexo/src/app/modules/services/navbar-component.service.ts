import { Injectable } from '@angular/core';
import { HomeComponent } from '../home/pages/home/home.component';
import { NavbarComponent } from '../home/pages/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class NavbarComponentService {

  constructor() {
    
   }

  private home!: HomeComponent;
  private nav!: NavbarComponent;

  public setHome(home:HomeComponent){
    this.home = home;
  }

  public mapReload(){
    this.home.mapReload();
  }

  public renameBttn(){
    this.nav.renameBttn();
  }
}
