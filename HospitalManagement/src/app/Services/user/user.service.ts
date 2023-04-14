import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/';
  constructor(private httpService: HttpService) { }

  Signup(result: any) {
    return this.httpService.PostService(this.url + 'users', result)
  }

  Login() {
    return this.httpService.GetService(this.url + 'users')
  }

  doctorList(){
    return this.httpService.GetService(this.url + 'doctors')
  }
}