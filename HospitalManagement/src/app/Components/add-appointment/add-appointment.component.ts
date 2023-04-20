import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorsDashboardComponent } from '../doctors-dashboard/doctors-dashboard.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup
  doctorname: any;
  id:any
  patient:any;
  name: any;
  email: any;

  constructor(private dialog: MatDialogRef<DoctorsDashboardComponent>, private formBuilder: FormBuilder,
    private userService: UserService, private snackbar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.doctorname = data.name
    this.appointmentForm = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      injury: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {

    this.id = localStorage.getItem('id');

    this.userService.GetUserDetails(this.id).subscribe((detail)=>{
      console.log(detail);
      this.patient = detail;
      this.name = this.patient.name;
      this.email = this.patient.email;
    })
  }

  cancel() {
    this.dialog.close();
  }

  submit() {
    let result = {
      name: this.patient.name,
      doctorname: this.doctorname,
      email: this.patient.email,
      date: this.appointmentForm.value.date,
      startTime: this.appointmentForm.value.startTime,
      endTime: this.appointmentForm.value.endTime,
      number: this.appointmentForm.value.number,
      age: this.appointmentForm.value.age,
      address: this.appointmentForm.value.address,
      injury: this.appointmentForm.value.injury
    }
    this.userService.AddAppointment(result).subscribe((response: any) => {
      console.log(response);

      this.snackbar.open('Appointment added successfully', 'Dismiss', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }, error => {
      this.snackbar.open('Something went wrong', 'Dismiss', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }
    )
    this.dialog.close();
  }
}
