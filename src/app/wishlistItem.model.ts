export class WishlistItem {
 
    productId: string;
    userId: string;
   
  
    constructor( productId = '', userId = 'Unknown') {
     
      this.productId = productId
      this.userId = userId     
    }
  }