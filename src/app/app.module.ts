import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {ProductsFakeDBService} from './Services/ProductServices/products-fake-db.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
