import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDashboardComponent } from './modules/home/components/custom-dashboard/custom-dashboard.component';
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component';
import { MapsComponent } from './modules/home/components/maps/maps.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { MainComponent } from './modules/home/pages/main/main.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/maps" },
  { path: "",component: MainComponent,
    children:[
      { path: "maps", component: MapsComponent},
      { path: "dashboard", component: DashboardComponent},
      { path: "custom", component: CustomDashboardComponent}
    ]
  },
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
