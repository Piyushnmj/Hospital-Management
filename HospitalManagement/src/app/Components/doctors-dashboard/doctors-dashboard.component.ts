import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-doctors-dashboard',
  templateUrl: './doctors-dashboard.component.html',
  styleUrls: ['./doctors-dashboard.component.scss']
})
export class DoctorsDashboardComponent implements OnInit {
  doctorsDetails: any;
  constructor(private dialog : MatDialog, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.doctorList().subscribe((response:any)=>{
      console.log(response);
      
      this.doctorsDetails = response
    })
  }

  addAppointment(content: any){
    let dialogBox = this.dialog.open(AddAppointmentComponent, {
      data: content
    })
  }

}
