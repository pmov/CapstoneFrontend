import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  productRef = new FormGroup({
    _id: new FormControl(),
    pname: new FormControl(),
    price: new FormControl(),
    purl: new FormControl()
  })
  msg: string = ""
  constructor(public pService: ProductService) { } //DI for service 
  ngOnInit(): void {
  }
  storeProduct() {

    let product = this.productRef.value;

    this.pService.storeProductDetails(product).subscribe((result: any) => {
      this.msg = "Record stored successfully"; this.ngOnInit();
    }, (error: any) => {
      this.msg = "Error generated id must be unique";
    })

    this.productRef.reset();   // clear data after operation on view or tempalte in textfield
  }

}
