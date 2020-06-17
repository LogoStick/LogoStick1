import { Injectable } from '@angular/core';
import {AbstractProductService} from '../Services/ProductServices/AbstractProductService';
import {Observable} from 'rxjs';
import {productList} from './productsList';
import {delay} from 'rxjs/operators';
import {Product} from '../Services/ProductServices/Products';

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {

  addProduct(product: Product): Observable<Product[]> {
    const response: Observable<Product[]> = new Observable((observer) => {
        productList.push(product);
        observer.next();
        observer.complete();
    });
    return response.pipe(delay(1000));
  }

  removeProduct(product: Product): Observable<Product[]> {
    const response: Observable<Product[]> = new Observable((observer) => {
        productList.slice(
          productList.findIndex(
            (productInArray ) => {
              return productInArray.equals(product);
            }), 1);
        observer.next();
        observer.complete();
    });
    return response.pipe(delay(1000));
  }

  searchForProductByOptions(optionsObject): Observable<Product[]> {
    return undefined;
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
        if (product.getName().toLowerCase().includes(searchingFor.toLowerCase())) {
          return true;
        }
      });
    const foundProducts$: Observable<Product[]> = new Observable((observer) => {
        observer.next(foundProducts);
        observer.complete();
    });
    return foundProducts$.pipe(delay(1000));
  }
}
