import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartitem } from 'src/app/cartitem.model';
import { MessengerService } from 'src/app/messenger.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  cartItems : Array<Cartitem> = [
    // { id: '1', productname: 'Test 1', qty: 4, price: 100 },
    // { id: '2', productname: 'Test 3', qty: 5, price: 50 },
    // { id: '3', productname: 'Test 2', qty: 3, price: 150 },
    // { id: '4', productname: 'Test 4', qty: 2, price: 200 },
  ];

  // cartItems: Array<Cartitem>=[]; 
  cartTotal = 0

  constructor(private router:Router,private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product._id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        id: product._id,
        productname: product.pname,
        qty: 1,
        price: product.price
      })
    }
    
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  checkout()
  {
    this.router.navigateByUrl("/checkout");   
  }


}
