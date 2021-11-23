import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';
import { User } from '../user.model';
import { UsermanagerService } from '../usermanager.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  msg: string = '';
  userRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private msgService: MessengerService,public userService: UsermanagerService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log("ENTERED Customer LOGIN" + this.userRef.value);
    let user = this.userRef.value;
    user.user_type = "Customer";
    this.userService.login(user).subscribe((result: any) => {
      this.msg = "Customer Logged in successfully";
      console.log("Customer SUCCESS LOGIN" + this.msg);
      this.msgService.sendAdminMsg(this.userRef.value.email);
      this.router.navigateByUrl('/shoppingcart');
    }, (error: any) => {
      this.msg = "Error";
      console.log("Customer FAILURE LOGIN" + this.msg);
    })

  }

  register(usernameObj: any, passwordObj: any) {
    console.log("ENTERED Customer Register");
    console.log("Customer Register Username :" + usernameObj.value);
    console.log("Customer Register Password :" + passwordObj.value);
    this.userService.register(new User(usernameObj.value, passwordObj.value, 'Customer')).subscribe((result: any) => {
      this.msg = "Customer Registered successfully";
      console.log("Customer SUCCESS REGISTER" + this.msg);
      // this.router.navigateByUrl('/adminportal') ;
    }, (error: any) => {
      this.msg = "Error " + error;
      console.log("Customer FAILURE REGITER" + this.msg);
    })
  }

}
