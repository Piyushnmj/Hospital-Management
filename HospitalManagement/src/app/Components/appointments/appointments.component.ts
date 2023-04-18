import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {
  appointmentList: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetAppointmentList().subscribe((response: any) => {
      console.log(response);
      this.appointmentList = response;
    })
  }

  sortData(sort: Sort) {
    const data = this.appointmentList.slice();
    if (!sort.active || sort.direction === '') {
      this.appointmentList = data;
      return;
    }

    this.appointmentList = data.sort((a: any, b:any) => {
      console.log(a, b)
    
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        default:
          return 0;
      }
    })
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
