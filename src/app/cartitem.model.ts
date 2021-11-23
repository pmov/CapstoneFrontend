export class Cartitem {
    id:string;
    productname:string;
    price:number;
    qty:number
    constructor(
        id='',
        productname='',
        price=0,
        qty=0){
        this.id = id;
        this.productname = productname;
        this.price = price;
        this.qty = qty;

    }
}