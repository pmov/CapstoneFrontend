import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/messenger.service';
import { Product } from 'src/app/product.model';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnChanges {


  @Input()
  productItem: Product = new Product();

  @Input() addedToWishlist: boolean = false;

  @Input()
  username: string = "";


  constructor(private msg: MessengerService, private wishlistService: WishlistService, private router: Router) { }

  
  ngOnChanges() {
    console.log("INSIDE PRUODUCT ITEM" + this.username);
 
  }

  handleAddToCart() {
    if (this.productItem !== undefined) {
      this.msg.sendMsg(this.productItem)
    }

  }

  handleAddToWishlist() {
    console.log("Add to wish list");
    this.wishlistService.addToWishlist(this.productItem._id, this.username).subscribe(() => {
      this.addedToWishlist = true;
    })

    console.log(this.addedToWishlist);
  }

  handleRemoveFromWishlist() {
    console.log("Remove to wish list");
    this.wishlistService.removeFromWishlist(this.productItem._id, this.username).subscribe(() => {
      this.addedToWishlist = false;
    })


  }



}


