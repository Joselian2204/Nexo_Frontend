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
import { PredictionComponent } from './modules/home/components/prediction/prediction.component';
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
      { path: "prediction", component: PredictionComponent}
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "admin", pathMatch: "full", redirectTo: "admin/pharmacy" },
  { path: "admin",component: AdminComponent,
  canActivate: [GuardGuard],
    children:[
      { path: "pharmacy", component: PharmacyComponent,canActivate: [GuardGuard]},
      { path: "hospital", component: HospitalComponent,canActivate: [GuardGuard]},
      { path: "countries", component: CountriesComponent,canActivate: [GuardGuard]},
      { path: "departaments", component: DepartamentsComponent,canActivate: [GuardGuard]},
      { path: "municipalities", component: MunicipalitiesComponent,canActivate: [GuardGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
