import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://54.173.150.38:9090/api/product";
  // url:string ="http://3.87.185.190:9090/api/product";

  constructor(public http: HttpClient) { }

  loadProuctInfo(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + "/getProductInfo");
  }

  // post method takes two parameter 1st url and 2nd json data. 
  storeProductDetails(product: Product): any {
    return this.http.post(this.url + "/storeProductInfo", product);
  }

  updateProduct(product: Product): any {
    return this.http.post(this.url + "/updateProductInfo", product);
  }

  deleteProductById(id: any): any {
    return this.http.delete(this.url + "/deleteProduct/" + id);
  }

}
