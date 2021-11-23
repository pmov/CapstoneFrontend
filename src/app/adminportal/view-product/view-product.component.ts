import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productList: Array<Product>=[]; 
 
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit() {
   
    this.loadProducts();
   
  }

  loadProducts() {
    this.productService.loadProuctInfo().subscribe(result=> {
      this.productList=result;
    })
  }

  deleteProduct(prodRef:any){
    console.log(prodRef);
    let id = prodRef._id;
    console.log("DELETE prod id :"+id);
    this.productService.deleteProductById(id).
    subscribe((result:any)=>{console.log(result); this.ngOnInit();},
    (error:any)=>console.log(error))
    //this.router.navigateByUrl('/adminportal') ;
    
  }

}
