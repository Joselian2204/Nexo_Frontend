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
import { SideNavAdminComponent } from './components/side-nav-admin/side-nav-admin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DepartamentsComponent } from './components/departaments/departaments.component';
import { MunicipalitiesComponent } from './components/municipalities/municipalities.component';

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
    SideNavAdminComponent,
    AdminComponent,
    PharmacyComponent,
    HospitalComponent,
    CountriesComponent,
    DepartamentsComponent,
    MunicipalitiesComponent
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
