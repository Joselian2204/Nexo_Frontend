import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DepartmentComponent } from './components/department/department.component';
import { CountryComponent } from './components/country/country.component';
import { BolmapComponent } from './components/bolmap/bolmap.component';
import { WorldmapComponent } from './components/worldmap/worldmap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DepartmentComponent,
    CountryComponent,
    BolmapComponent,
    WorldmapComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,  
    GoogleMapsModule          
  ],
})
export class HomeModule { }
