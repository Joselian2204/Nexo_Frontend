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
import { SideNavAdminComponent } from './components/side-nav-admin/side-nav-admin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DepartamentsComponent } from './components/departaments/departaments.component';
import { MunicipalitiesComponent } from './components/municipalities/municipalities.component';
import { MatTableModule } from '@angular/material/table';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatMenuModule } from '@angular/material/menu';
import { AddHospitalComponent } from './components/dialogs/add-hospital/add-hospital.component';
import { AddPharmacyComponent } from './components/dialogs/add-pharmacy/add-pharmacy.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PredictionComponent } from './components/prediction/prediction.component';
import { DeletePharmacyComponent } from './components/dialogs/delete-pharmacy/delete-pharmacy.component';
import { DeleteHospitalComponent } from './components/dialogs/delete-hospital/delete-hospital.component';
import { UpdatePharmacyComponent } from './components/dialogs/update-pharmacy/update-pharmacy.component';
import { UpdateHospitalComponent } from './components/dialogs/update-hospital/update-hospital.component';
import { BetasDialogComponent } from './components/dialogs/betas-dialog/betas-dialog.component';


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
    CustomfiltersComponent,
    SideNavAdminComponent,
    AdminComponent,
    PharmacyComponent,
    HospitalComponent,
    CountriesComponent,
    DepartamentsComponent,
    MunicipalitiesComponent,
    AddHospitalComponent,
    AddPharmacyComponent,
    PredictionComponent,
    DeletePharmacyComponent,
    DeleteHospitalComponent,
    UpdatePharmacyComponent,
    UpdateHospitalComponent,
    BetasDialogComponent,
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
    MatButtonToggleModule,
    MatDialogModule,
    MatTableModule,
    CKEditorModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }
