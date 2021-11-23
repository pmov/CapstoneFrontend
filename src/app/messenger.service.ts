// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessengerService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  subjectAdmin = new BehaviorSubject("");
  subjectCustomer = new Subject();

  constructor() { }

  sendMsg(product:Product) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }

  sendAdminMsg(username:string){
    this.subjectAdmin.next(username) //Triggering an event
  }

  getAdminMsg() {
    return this.subjectAdmin.asObservable();
  }

  sendCustomerMsg(username:string){
    this.subjectCustomer.next(username) //Triggering an event
  }

  getCustomerMsg() {
    return this.subjectCustomer.asObservable();
  }
}
