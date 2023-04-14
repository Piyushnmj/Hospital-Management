import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DoctorsDashboardComponent } from '../doctors-dashboard/doctors-dashboard.component';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private dialog : MatDialogRef<DoctorsDashboardComponent>) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialog.close();
  }

}
