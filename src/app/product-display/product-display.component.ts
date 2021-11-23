import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  products:Array<Product>=[];
  productsDb:Array<Product>=[];
  shoppingCart:Array<String>=[];
  items:Number=0;
  constructor(public proSer:ProductService) { }

  ngOnInit(): void {
    this.products.push(new Product("100","Apple",250,"../assets/apple.jpg"));
    this.products.push(new Product("200","Avocado",550,"../assets/avocados.jpg"));
    this.products.push(new Product("300","Banana",100,"https://media.gettyimages.com/photos/ripe-bananas-in-sangli-maharashtra-india-picture-id535180516?k=20&m=535180516&s=612x612&w=0&h=VAUz7XFZOfcb13GQYr6r2ykix7ciTon-YeeHVlc25K8="));
    this.products.push(new Product("400","mango",120,"../assets/mango.jpg"));
    this.products.push(new Product("500","orange",180,"../assets/orange.jpg"));
    // call service method 

    this.proSer.loadProuctInfo().subscribe(result=> {
      this.productsDb=result;
    })

  }


  deleteInfo(id:any){
    console.log(id)
  }

  addToCart(id:any):void{
    this.shoppingCart.push(id);
    this.items = this.shoppingCart.length;
  }
}


/*

https://media.gettyimages.com/photos/ripe-bananas-in-sangli-maharashtra-india-picture-id535180516?k=20&m=535180516&s=612x612&w=0&h=VAUz7XFZOfcb13GQYr6r2ykix7ciTon-YeeHVlc25K8=

*/