import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { AddAppointmentComponent } from './Components/add-appointment/add-appointment.component';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { DoctorsDashboardComponent } from './Components/doctors-dashboard/doctors-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginFormComponent,
    AddAppointmentComponent,
    DashboardComponent,
    DoctorsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
