import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ShopComponent } from './shop/shop.component';
import { UsermanagerComponent } from './usermanager/usermanager.component';

const routes: Routes = [
  {path:"adminlogin",component:AdminloginComponent},
  {path:"customerlogin",component:CustomerloginComponent},
  {path:"productdisplay",component:ProductDisplayComponent},
  {path:"adminportal",component:AdminportalComponent},
  {path:"shoppingcart",component:ShopComponent},
  {path:"usermanager",component:UsermanagerComponent},
  {path:"checkout",component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
