import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url = 'http://localhost:3000/doctors';
  constructor(private httpService: HttpService) { }
  
  doctorList(){
    return this.httpService.GetService(this.url)
  }
}
