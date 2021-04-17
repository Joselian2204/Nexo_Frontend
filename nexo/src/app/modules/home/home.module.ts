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
import { CardsComponent } from './components/cards/cards.component';
import { CardsworldComponent } from './components/cardsworld/cardsworld.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DepartmentComponent,
    CountryComponent,
    BolmapComponent,
    WorldmapComponent,
    CardsComponent,
    CardsworldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,  
    ChartsModule          
  ],
})
export class HomeModule { }
