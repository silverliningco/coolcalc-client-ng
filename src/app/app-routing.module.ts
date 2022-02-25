import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CoolcalcMJ8Component} from './pages/coolcalc-mj8/coolcalc-mj8.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'coolcalc', component: CoolcalcMJ8Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
