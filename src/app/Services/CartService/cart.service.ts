import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Cart} from '../../Models/Cart/Cart';
import {ProductCountPair} from '../../Models/ProductCountPair/ProductCountPair';
import {Product} from '../../Models/Product/Product';
import {count} from 'rxjs/operators';
import {AbstractProductService} from '../ProductServices/AbstractProductService';
import {AbstractCartService} from './AbstractCartService';

@Injectable({
  providedIn: 'root'
})
export class CartService implements AbstractCartService {
  private cart$: Subject<Cart> = new Subject();
  private cart = new Cart();
  private productCountPairs: ProductCountPair[] = [];
  productCountPairsIncludesProduct(product: Product): boolean {
    return this.productCountPairs
      .some(productCountPair => productCountPair.productOfPairEquals(product));
  }
  updateCartAndNotifySubscribers(): void {
    this.cart.setProductAmountPairs(this.productCountPairs);
    this.cart.setCountOfProducts(this.updateCountOfProducts());
    this.cart.setTotalPrice(this.updateTotalPrice());
    this.cart$.next(this.cart);
  }
  updateTotalPrice(): number {
    return this.productCountPairs
      .map(productCountPair => productCountPair.getProduct().getPrice() * productCountPair.getCount())
      .reduce((sum, current) => sum + current, 0);
  }
  updateCountOfProducts(): number {
    return this.productCountPairs
      .map(productCountPairs => productCountPairs.getCount())
      .reduce((sum, current) => sum + current, 0);
  }
  getCart$(): Observable<Cart> {
    return this.cart$;
  }
  addProduct(product: Product): void {
    if (!this.productCountPairsIncludesProduct(product)) {
      this.productCountPairs.push(new ProductCountPair().setCount(1).setProduct(product));
      this.updateCartAndNotifySubscribers();
    }
  }
  removeProduct(product: Product): void {
    if (this.productCountPairs.some(productCountPair => productCountPair.productOfPairEquals(product))) {
      const index = this.productCountPairs
        .findIndex(productCountPair => productCountPair.productOfPairEquals(product));
      this.productCountPairs.splice(index, 1);
      this.updateCartAndNotifySubscribers();
    }
  }
  setCountOfProduct(product: Product, amount: number): void {
    if (this.productCountPairsIncludesProduct(product)) {
      const foundIndex = this.productCountPairs
        .findIndex((productCountPair) => productCountPair.getProduct().equals(product));
      this.productCountPairs[foundIndex].setCount(amount);
      this.updateCartAndNotifySubscribers();
    }
  }
  increaseCountOfProductByOne(product: Product): void {
    if (this.productCountPairsIncludesProduct(product)) {
      const foundIndex = this.productCountPairs
        .findIndex((productCountPair) => productCountPair.getProduct().equals(product));
      this.productCountPairs[foundIndex].increaseCountByOne();
      this.updateCartAndNotifySubscribers();
    }
  }
  decreaseCountOfProductByOne(product: Product): void {
    if (this.productCountPairsIncludesProduct(product)) {
      const foundIndex = this.productCountPairs
        .findIndex((productCountPair) => productCountPair.getProduct().equals(product));
      this.productCountPairs[foundIndex].decreaseCountByOne();
      this.updateCartAndNotifySubscribers();
    }
  }

}
