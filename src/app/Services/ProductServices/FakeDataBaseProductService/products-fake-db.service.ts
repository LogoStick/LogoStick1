import { Injectable } from '@angular/core';
import {AbstractProductService} from '../AbstractProductService';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {FakeDBService} from '../../../FakeDataBase/fake-db.service';
import {Product} from '../../../Models/Product/Product';
import {OptionsObject} from '../../../Models/OptionsObject/OptionsObject';
import {HttpClient} from '@angular/common/http';
import {productList} from '../../../FakeDataBase/productsList';

@Injectable({
  providedIn: 'root'
})
export class ProductsFakeDBService extends AbstractProductService{
  shownProducts$: Subject<Product[]>;
  constructor(private fakeDBService: FakeDBService, private httpClient: HttpClient) {
    super();
    this.shownProducts$ = new Subject<Product[]>();
  }

  addProduct(product: Product): void {
    this.fakeDBService.addProduct(product);
  }

  getShownProducts(): Observable<Product[]> {
    return this.shownProducts$;
  }

  listProductsFromAtoN(from: number, to: number): Observable<Product[]> {
    const response = this.fakeDBService.getProductsFromAtoN(from, to);
    response.subscribe(val => this.shownProducts$.next(val));
    return response;
  }

  removeProduct(product: Product): void {
    this.fakeDBService.removeProduct(product);
  }

  searchForProductByOptions(optionsObject: OptionsObject): Observable<Product[]> {
    return null;
  }

  searchForProductsByName(searchingFor: string): Observable<Product[]> {
    const response = this.fakeDBService.searchForProductByName(searchingFor);
    response.subscribe(val => this.shownProducts$.next(val));
    return response;
  }

  getProductById(id: number): Observable<Product> {
    return this.fakeDBService.getProductById(id);
  }

  doesProductExistById(id: number): Observable<boolean> {
    return this.fakeDBService.doesProductExistById(id);
  }

  doesProductExist(product: Product): Observable<boolean> {
    return this.fakeDBService.doesProductExist(product);
  }


}
