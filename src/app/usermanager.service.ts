import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {

  // constructor() { }
  url: string = "http://54.173.150.38:9090/api/login";//login
  // url:string ="http://3.87.185.190:9090/api/user";

  constructor(public http: HttpClient) { }

  login(user: User): any {
    return this.http.post(this.url + "/login",user);
  }

  register(user: User): any {
    return this.http.post(this.url + "/register",user);
  }
}
