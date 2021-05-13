import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MapsComponent } from './components/maps/maps.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SidenavComponent,
    MainComponent,
    LoginComponent,
    MapsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class HomeModule { }
