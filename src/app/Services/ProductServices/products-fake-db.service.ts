import { Injectable } from '@angular/core';
import {AbstractProductService} from './AbstractProductService';
import {BehaviorSubject, Observable} from 'rxjs';
import {FakeDBService} from '../../FakeDataBase/fake-db.service';
import {Product} from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsFakeDBService extends AbstractProductService{
  shownProducts$: BehaviorSubject<Product[]>;
  constructor(private fakeDBService: FakeDBService) {
    super();
    this.shownProducts$ = new BehaviorSubject<Product[]>([]);
  }

  addProduct(product: Product): Observable<Product> {
    return undefined;
  }

  getShownProducts(): Observable<Product[]> {
    return this.shownProducts$;
  }

  listProductsFromAtoN(from: number, to: number): Observable<Product[]> {
    const response = this.fakeDBService.getProductsFromAtoN(from, to);
    response.subscribe(val => this.shownProducts$.next(val));
    return response;
  }

  removeProduct(product: Product): Observable<Product> {
    return undefined;
  }

  searchForProductByOptions(categoriesObject): Observable<Product[]> {
    return undefined;
  }

  searchForProductsByName(searchingFor: string): Observable<Product[]> {
    const response = this.fakeDBService.searchForProductByName(searchingFor);
    response.subscribe(val => this.shownProducts$.next(val));
    return response;
  }
}
