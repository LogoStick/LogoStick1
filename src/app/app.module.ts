import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {ProductsFakeDBService} from './Services/ProductServices/products-fake-db.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
