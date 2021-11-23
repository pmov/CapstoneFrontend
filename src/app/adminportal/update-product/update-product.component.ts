import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  msg: string = ""
  constructor(public pService:ProductService) { }

  ngOnInit(): void {
  }

  updateProduct(productRef:NgForm){
    let product = productRef.value;
    console.log("*******************"+product._id);
    this.pService.updateProduct(product).
    subscribe((result:any)=>{this.msg = "Product Updated successfully";console.log(result);},
    (error:any)=>console.log(error));
    
  }

}
