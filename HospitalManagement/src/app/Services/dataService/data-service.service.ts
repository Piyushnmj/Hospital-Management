import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject([]);
  incomingMessage = this.messageSource.asObservable();

  constructor() { }

  OutgoingMessage(result: any){
    //console.log(result);
    this.messageSource.next(result);
  }
}
