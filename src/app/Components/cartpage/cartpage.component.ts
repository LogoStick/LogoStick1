import { Component, OnInit } from '@angular/core';
import {AbstractCartService} from '../../Services/CartService/AbstractCartService';
import {Product} from '../../Models/Product/Product';
import {Cart} from '../../Models/Cart/Cart';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart = new Cart();
  constructor(public abstractCartService: AbstractCartService) {
    this.abstractCartService.getCart$().subscribe(cart => {
      console.log(cart);
      this.cart = cart;
    });
    this.abstractCartService.addProduct(new Product().setName('eheheh').setPrice(100));
    this.abstractCartService.addProduct(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.increaseCountOfProductByOne(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.increaseCountOfProductByOne(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.increaseCountOfProductByOne(new Product().setName('eheheh').setPrice(100));
    this.abstractCartService.increaseCountOfProductByOne(new Product().setName('eheheh').setPrice(100));
    this.abstractCartService.decreaseCountOfProductByOne(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.decreaseCountOfProductByOne(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.decreaseCountOfProductByOne(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.decreaseCountOfProductByOne(new Product().setName('lalla').setPrice(10));
    this.abstractCartService.setCountOfProduct(new Product().setName('lalla').setPrice(10), 1000);
    this.abstractCartService.removeProduct(new Product().setName('lalla').setPrice(10));
  }

  ngOnInit(): void {
  }

}
