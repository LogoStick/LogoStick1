import { Injectable } from '@angular/core';
import {AbstractProductService} from '../Services/ProductServices/AbstractProductService';
import {Observable} from 'rxjs';
import {productList} from './productsList';
import {delay} from 'rxjs/operators';
import {Product} from '../Services/ProductServices/Product';
import {OptionsObject} from '../Services/ProductServices/OptionsObject';

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {
  addProduct(product: Product): void {
    productList.push(product);
  }

  removeProduct(product: Product): void {
    const removedProductIndex: number = productList.findIndex((iteratedProduct) => {
      return product.equals(iteratedProduct);
    });
    productList.slice(removedProductIndex, 1);
  }

  searchForProductByOptions(optionsObject: OptionsObject): Observable<Product[]> {
    const foundProducts = productList.filter((product) => {
      return optionsObject.doesProductMatchPresentOptions(product);
    });
    const foundProducts$: Observable<Product[]> = new Observable((observer) => {
      observer.next(foundProducts);
      observer.complete();
    })
    return foundProducts$.pipe(delay(1000));
  }

  getProductsFromAtoN(from: number, to: number): Observable<Product[]> {
    to = productList.length > to ? to : productList.length;
    const foundProducts = productList.slice(from, to);
    const foundProducts$: Observable<Product[]> = new Observable<Product[]>((observer) => {
        observer.next(foundProducts);
        observer.complete();
    });
    return foundProducts$.pipe(delay(1000));
  }

  searchForProductByName(searchingFor: string): Observable<Product[]> {
    const foundProducts = productList.filter((product) => {
          return product.getName().toLowerCase().includes(searchingFor.toLowerCase());
      });
    const foundProducts$: Observable<Product[]> = new Observable((observer) => {
        observer.next(foundProducts);
        observer.complete();
    });
    return foundProducts$.pipe(delay(1000));
  }
}
