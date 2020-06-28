import { Injectable } from '@angular/core';
import {AbstractProductService} from '../Services/ProductServices/AbstractProductService';
import {Observable} from 'rxjs';
import {productList} from './productsList';
import {delay} from 'rxjs/operators';
import {Product} from '../Models/Product/Product';
import {OptionsObject} from '../Models/OptionsObject/OptionsObject';

@Injectable({
  providedIn: 'root'
})
export class FakeDBService {
  getProductById(id: number): Observable<Product> {
    const foundProduct = productList.find((product => product.getId() === id));
    const response: Observable<Product> = new Observable((observer) => {
      observer.next(foundProduct);
      observer.complete();
    });
    return response.pipe(delay(1000));
  }
  addProduct(product: Product): void {
    productList.push(product);
  }

  removeProduct(product: Product): void {
    const removedProductIndex: number = productList.findIndex((iteratedProduct) => {
      return product.equals(iteratedProduct);
    });
    productList.slice(removedProductIndex, 1);
  }

  searchForProductByOptions(): Observable<Product[]> {
    // TO BE IMPLEMENTED
    return null;
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

  doesProductExist(id: number): Observable<boolean> {
    const productExists: boolean = productList.find(product => product.getId() === id) !== undefined;
    const response: Observable<boolean> = new Observable((observer) => {
      observer.next(productExists);
      observer.complete();
    })
    return response.pipe(delay(1000));
  }
}
