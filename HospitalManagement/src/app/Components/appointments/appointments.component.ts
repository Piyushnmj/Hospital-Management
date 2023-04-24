import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { DataServiceService } from 'src/app/Services/dataService/data-service.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['photo', 'name', 'email', 'date', 'time', 'number', 'doctor', 'injury', 'actions'];
  dataSource: any;
  id: any;
  accountData: any;
  find: any;
  constructor(private userService: UserService, private snackbar: MatSnackBar, private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.id = localStorage.getItem('id');

    this.userService.GetUserDetails(this.id).subscribe((detail)=>{
      console.log(detail);
      this.accountData = detail;
    })

    this.userService.GetAppointmentList().subscribe((response: any) => {
      console.log(response);
      this.dataSource = response.filter((f:any)=>{
        return f.email == this.accountData.email
      }
      );
    })

    this.dataService.incomingMessage.subscribe((list)=>{
      console.log('Searching',list);
      this.find = list;
    })
    
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a: any, b: any) => {
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

  delete(id:any) {
    console.log(id);
    
    this.userService.DeleteAppointment(id).subscribe((result) => {
      console.log(result);
      this.snackbar.open('Appointment deleted successfully', 'Dismiss', {
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
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
