import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './modules/guard/guard.guard';
import { CountriesComponent } from './modules/home/components/countries/countries.component';
import { CustomDashboardComponent } from './modules/home/components/custom-dashboard/custom-dashboard.component';
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component';
import { DepartamentsComponent } from './modules/home/components/departaments/departaments.component';
import { HospitalComponent } from './modules/home/components/hospital/hospital.component';
import { MapsComponent } from './modules/home/components/maps/maps.component';
import { MunicipalitiesComponent } from './modules/home/components/municipalities/municipalities.component';
import { PharmacyComponent } from './modules/home/components/pharmacy/pharmacy.component';
import { AdminComponent } from './modules/home/pages/admin/admin.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { MainComponent } from './modules/home/pages/main/main.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/maps" },
  { path: "",component: MainComponent,
    children:[
      { path: "maps", component: MapsComponent},
      { path: "dashboard", component: DashboardComponent},
      { path: "custom", component: CustomDashboardComponent},
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "admin", pathMatch: "full", redirectTo: "admin" },
  { path: "admin",component: AdminComponent,
  canActivate: [GuardGuard],
    children:[
      { path: "pharmacy", component: PharmacyComponent},
      { path: "hospital", component: HospitalComponent},
      { path: "countries", component: CountriesComponent},
      { path: "departaments", component: DepartamentsComponent},
      { path: "municipalities", component: MunicipalitiesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
