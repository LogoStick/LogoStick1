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

  addProduct(): Observable<Product> {
    return undefined;
  }

  removeProduct(): Observable<Product> {
    return undefined;
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
        if (product.name.toLowerCase().includes(searchingFor.toLowerCase())) {
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
