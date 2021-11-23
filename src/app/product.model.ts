
export class Product {
    _id: string;
    pname: string;
    price: number;
    purl: string;
  
    constructor(_id='', pname = '', price = 0, purl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
      this._id = _id
      this.pname = pname
      this.price = price
      this.purl = purl
    }
  }
  