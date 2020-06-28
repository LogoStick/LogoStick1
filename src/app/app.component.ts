import { Component } from '@angular/core';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {Product} from './Models/Product/Product';
import {OptionsObject} from './Models/OptionsObject/OptionsObject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractCartService} from './Services/CartService/AbstractCartService';
import {Cart} from './Models/Cart/Cart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart: Cart = this.abstractCartService.getCartSnapshot();
  constructor(
    private abstractProductsService: AbstractProductService,
    private abstractCartService: AbstractCartService
  )
  {
    this.abstractCartService.getCart$().subscribe(cart => this.cart = cart);
  }
}
