import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  username:string='';

  constructor(private msgService: MessengerService) { }

  ngOnInit(): void {
    this.msgService.getAdminMsg().subscribe(msg => {this.username = msg;console.log("logged in user "+msg)});  
    console.log("SHOP USER"+this.username); 
  }

}
