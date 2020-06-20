import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {ProductsFakeDBService} from './Services/ProductServices/products-fake-db.service';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './Components/homepage/homepage.component';
import {AppRoutingModule} from './Modules/custom-router/app-routing.module';
import { CartComponent } from './Components/Homepage/cart/cart.component';
import { SearchboxComponent } from './Components/Homepage/searchbox/searchbox.component';
import { ProductdisplayerComponent } from './Components/Homepage/productdisplayer/productdisplayer.component';
import { DisplayedproductComponent } from './Components/Homepage/displayedproduct/displayedproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    SearchboxComponent,
    ProductdisplayerComponent,
    DisplayedproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
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
