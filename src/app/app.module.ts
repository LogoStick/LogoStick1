import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './Modules/app-routing/app-routing.module';
import {ProductsFakeDBService} from './Services/ProductServices/products-fake-db.service';
import {ProductDisplayerComponent} from './Components/homepage/product-displayer/product-displayer.component';
import {DisplayedProductComponent} from './Components/homepage/displayed-product/displayed-product.component';
import {AppComponent} from './app.component';
import {CartComponent} from './Components/homepage/cart/cart.component';
import {SearchboxComponent} from './Components/homepage/searchbox/searchbox.component';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {HomepageComponent} from './Components/homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductpageComponent } from './Components/productpage/productpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    ProductDisplayerComponent,
    DisplayedProductComponent,
    SearchboxComponent,
    ProductpageComponent,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
