import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  displayedColumns: string[] = ['photo', 'name', 'id', 'age', 'address', 'number', 'lastvisit', 'status', 'actions'];
  //appointmentList: any;
  dataSource: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetAppointmentList().subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
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
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'age':
          return compare(a.age, b.age, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        default:
          return 0;
      }
    })
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

