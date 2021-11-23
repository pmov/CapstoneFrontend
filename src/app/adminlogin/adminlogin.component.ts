import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessengerService } from '../messenger.service';
import { User } from '../user.model';
import { UsermanagerService } from '../usermanager.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  msg:string='';
  userRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl()  
  })
  constructor(private msgService: MessengerService,public userService: UsermanagerService,private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("ENTERED LOGIN"+this.userRef.value);
    let user = this.userRef.value;
    user.user_type = "Admin";
    this.userService.login(user).subscribe((result: any) => {
      this.msg = "Admin Logged in successfully";
      console.log("ADMIN SUCCESS LOGIN"+this.msg);
      //this.msgService.sendAdminMsg(this.userRef.value.email);
      this.router.navigateByUrl('/adminportal') ;
    }, (error: any) => {
      this.msg = "Error generated id must be unique";
      console.log("ADMIN FAILURE LOGIN"+this.msg);
    })
 
    //TODO
    
  }

  register(usernameObj:any,passwordObj:any){
    console.log("ENTERED Admin Register");
    console.log("Admin Register Username :"+usernameObj.value);
    console.log("Admin Register Pasword :"+passwordObj.value);
    this.userService.register(new User(usernameObj.value,passwordObj.value,'Admin')).subscribe((result: any) => {
      this.msg = "Admin Registered successfully";
      console.log("ADMIN SUCCESS REGISTER"+this.msg);
      // this.router.navigateByUrl('/adminportal') ;
    }, (error: any) => {
      this.msg = "Error generated id must be unique"+error;
      console.log("ADMIN FAILURE REGITER"+this.msg);
    })
  }


}
