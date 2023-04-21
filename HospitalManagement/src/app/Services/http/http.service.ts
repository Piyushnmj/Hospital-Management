import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  PostService(url: string, data: any) {
    return this.httpClient.post(url, data)
  }

  PutService(url: string, data: any) {
    return this.httpClient.put(url, data)
  }

  GetService(url: string) {
    return this.httpClient.get(url)
  }

  DeleteService(url: string) {
    return this.httpClient.delete(url)
  }
}