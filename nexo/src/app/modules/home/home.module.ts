import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DepartmentComponent } from './components/department/department.component';
import { CountryComponent } from './components/country/country.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DepartmentComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule               
  ],
})
export class HomeModule { }
