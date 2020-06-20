import { Injectable } from '@angular/core';
import {AbstractProductService} from './AbstractProductService';
import {BehaviorSubject, Observable} from 'rxjs';
import {FakeDBService} from '../../FakeDataBase/fake-db.service';
import {Product} from './Product';
import {OptionsObject} from './OptionsObject';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsFakeDBService extends AbstractProductService{
  shownProducts$: BehaviorSubject<Product[]>;
  constructor(private fakeDBService: FakeDBService, private httpClient: HttpClient) {
    super();
    this.shownProducts$ = new BehaviorSubject<Product[]>([]);
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
    const response = this.fakeDBService.searchForProductByOptions(optionsObject);
    response.subscribe((val) => this.shownProducts$.next(val));
    console.log(this.shownProducts$.getValue());
    return response;
  }

  searchForProductsByName(searchingFor: string): Observable<Product[]> {
    const response = this.fakeDBService.searchForProductByName(searchingFor);
    response.subscribe(val => this.shownProducts$.next(val));
    return response;
  }

  getProductById(id: number): Observable<Product> {
    return this.fakeDBService.getProductById(id);
  }


}
