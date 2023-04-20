import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AddAppointmentComponent } from './Components/add-appointment/add-appointment.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DoctorsDashboardComponent } from './Components/doctors-dashboard/doctors-dashboard.component';
import { AppointmentsComponent } from './Components/appointments/appointments.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { AuthguardGuard } from './authorization/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'add-appointment', component: AddAppointmentComponent },
  {
    path: 'home', component: DashboardComponent, canActivate: [AuthguardGuard],
    children: [
      { path: '', redirectTo: '/home/doctors', pathMatch: 'full' },
      { path: 'doctors', component: DoctorsDashboardComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'patients', component: PatientsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
