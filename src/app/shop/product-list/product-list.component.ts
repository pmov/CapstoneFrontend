import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  username: string = "";

  productList: Array<Product>=[]; 
  wishlist: String[] = [];
  wishlistID: String[] = [];
  

  constructor(private productService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit() {
   
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productService.loadProuctInfo().subscribe(result=> {
      this.productList=result;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist(this.username).subscribe(wishlistitems => {
     
      console.log("***************"+wishlistitems);
      for(let item of wishlistitems)
      {
        //this.wishlist.push(item.productId);
        //this.wishlistID.push(item._id);
        this.wishlist.push(item.productId);
       
      }
      console.log("wishlist ***************"+this.wishlist);
      //this.wishlist = productIds
    })
  }

}
