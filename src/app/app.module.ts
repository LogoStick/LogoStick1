import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './Modules/app-routing/app-routing.module';
import {ProductsFakeDBService} from './Services/ProductServices/FakeDataBaseProductService/products-fake-db.service';
import {ProductDisplayerComponent} from './Components/homepage/product-displayer/product-displayer.component';
import {DisplayedProductComponent} from './Components/homepage/displayed-product/displayed-product.component';
import {NotFoundProductPageComponent} from './Components/not-found-product-page/not-found-product-page.component';
import {DisplayedcartproductComponent} from './Components/cartpage/displayedcartproduct/displayedcartproduct.component';
import {AppComponent} from './app.component';
import {SearchboxComponent} from './Components/homepage/searchbox/searchbox.component';
import {CartService} from './Services/CartService/cart.service';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {AbstractCartService} from './Services/CartService/AbstractCartService';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {ProductpageComponent} from './Components/productpage/productpage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CartpageComponent} from './Components/cartpage/cartpage.component';
import {DateBaseProductService} from './Services/ProductServices/DataBaseProductService/date-base-product.service';
import {FakeDBService} from './FakeDataBase/fake-db.service';




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
    NotFoundProductPageComponent
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
      // useClass: ProductsFakeDBService
      useClass: DateBaseProductService
    },
    {
      provide: AbstractCartService,
      useClass: CartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
