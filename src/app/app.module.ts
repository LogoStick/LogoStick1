import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './Modules/app-routing/app-routing.module';
import {ProductsFakeDBService} from './Services/ProductServices/products-fake-db.service';
import {ProductDisplayerComponent} from './Components/homepage/product-displayer/product-displayer.component';
import {DisplayedProductComponent} from './Components/homepage/displayed-product/displayed-product.component';
import {AppComponent} from './app.component';
import {SearchboxComponent} from './Components/homepage/searchbox/searchbox.component';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductpageComponent } from './Components/productpage/productpage.component';
import {AbstractCartService} from './Services/CartService/AbstractCartService';
import {CartService} from './Services/CartService/cart.service';
import { CartpageComponent } from './Components/cartpage/cartpage.component';
import { DisplayedcartproductComponent } from './Components/cartpage/displayedcartproduct/displayedcartproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductDisplayerComponent,
    DisplayedProductComponent,
    SearchboxComponent,
    ProductpageComponent,
    CartpageComponent,
    DisplayedcartproductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: AbstractProductService,
      useClass: ProductsFakeDBService
    },
    {
      provide: AbstractCartService,
      useClass: CartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
