import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ShopComponent } from './shop/shop.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductItemComponent } from './shop/product-list/product-item/product-item.component';
import { CartItemComponent } from './shop/cart/cart-item/cart-item.component';
import { ViewProductComponent } from './adminportal/view-product/view-product.component';
import { AddProductComponent } from './adminportal/add-product/add-product.component';
import { UpdateProductComponent } from './adminportal/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsermanagerComponent } from './usermanager/usermanager.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ShopComponent,
    AdminportalComponent,
    CustomerloginComponent,
    AdminloginComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    ViewProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    UsermanagerComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
