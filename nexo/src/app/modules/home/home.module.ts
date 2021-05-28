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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BoliviadashboardComponent } from './components/dashboard/boliviadashboard/boliviadashboard.component';
import { WorlddashboardComponent } from './components/dashboard/worlddashboard/worlddashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomDashboardComponent } from './components/custom-dashboard/custom-dashboard.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CustomfiltersComponent } from './components/dialogs/customfilters/customfilters.component';

@NgModule({
  declarations: [
    SidenavComponent,
    MainComponent,
    LoginComponent,
    MapsComponent,
    DashboardComponent,
    BoliviadashboardComponent,
    WorlddashboardComponent,
    CustomDashboardComponent,
    CustomfiltersComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ChartsModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ]
})
export class HomeModule { }
