import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AddAppointmentComponent } from './Components/add-appointment/add-appointment.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DoctorsDashboardComponent } from './Components/doctors-dashboard/doctors-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'add-appointment', component: AddAppointmentComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'doctors', component: DoctorsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
