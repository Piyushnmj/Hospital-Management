import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  PostService(url:string, data:any, token:boolean=false, httpOptions:any={}){
      return this.httpClient.post(url, data , token && httpOptions)
  }

  PutService(url:string, data:any, httpOptions:any={}){
    return this.httpClient.put(url, data && httpOptions)
  }

  GetService(url:string, data:any, httpOptions:any={}){
    return this.httpClient.get(url, data && httpOptions)
  }

  DeleteService(url:string, data:any, httpOptions:any={}){
    return this.httpClient.delete(url, data && httpOptions)
  }

}