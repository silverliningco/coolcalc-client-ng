import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routes
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CoolcalcMJ8Component } from './pages/coolcalc-mj8/coolcalc-mj8.component';
import { ReportCoolcalcMJ8Component } from './pages/report-coolcalc-mj8/report-coolcalc-mj8.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoolcalcMJ8Component,
    ReportCoolcalcMJ8Component,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
