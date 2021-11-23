// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WishlistService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WishlistItem } from './wishlistItem.model';

// import { wishlistUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  url: string = "http://54.173.150.38:9090/api/wishlist";

  constructor(private http: HttpClient) { }

  getWishlist(username:any) {
    // return this.http.get(this.url).pipe(
    //   map((result: any[]) => {
    //     let productIds: any[] = []

    //     result.forEach(item => productIds.push(item.id))

    //     return productIds;
    //   })
    // )
    // let tempList = this.http.get<WishlistItem []>(this.url+"/getWishListInfo");
    // let prodIdList: String[] = [];
    // this.http.get<WishlistItem[]>(this.url + "/getWishListInfo").pipe(
    //   map((result: any[]) => {
    //     let productIds: any[] = []

    //     result.forEach(item => {prodIdList.push(item.id)})

    //     return productIds;
    //   })
    // )
    //return this.http.get<String[]>(this.url+"/getWishListInfo");
    // return prodIdList;
    console.log("GETTTING THE wishlist..."+username);
    return this.http.get<WishlistItem []>(this.url+"/getWishListInfo/"+username);
  }

  addToWishlist(productId: any, username: any) {
    // return this.http.post(this.url, { id: productId })
    let wishlistItem = new WishlistItem(productId, username);
    return this.http.post(this.url + "/storeWishlistProductId", wishlistItem);
  }

  removeFromWishlist(productId: any, username: any) {
    // let wishlistitemID:string= '';
    // this.http.get<WishlistItem[]>(this.url + "/getWishListInfo").pipe(
    //   map((result: any[]) => {
    //     result.forEach(item => {
    //       if (item.productId == productId && item.userId == "Unknown") {
    //         wishlistitemID = item._id;
    //       }

    //     })
    //   }
    let wishlistItem = new WishlistItem(productId, username);
      return this.http.post(this.url + "/deleteWishListProduct",wishlistItem);
  }
}
