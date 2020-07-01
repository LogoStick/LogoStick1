import { Injectable } from '@angular/core';
import {AbstractProductService} from '../AbstractProductService';
import {Product} from '../../../Models/Product/Product';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateBaseProductService extends AbstractProductService{

  constructor(private httpClient: HttpClient) {
    super();
    this.shownProducts$ = new Subject<Product[]>();
  }
  private baseUrl = 'http://localhost:8080/product-service/';
  public shownProducts$: Subject<Product[]>;

  addProduct(product: Product): void {
    this.httpClient.post(
      this.baseUrl + 'add-product',
      product
    );
  }

  doesProductExist(id: number): Observable<boolean> {
    const response = this.httpClient.get<boolean>(
      this.baseUrl + 'does-product-exist/' + id,
    );
    return response;
  }

  getProductById(id: number): Observable<Product> {
    const response = this.httpClient.get<Product>(
      this.baseUrl + 'product-service/get-product-by-id/' + id
    )
      .pipe(map(product => Product.of(product)));
    return response;
  }

  getShownProducts(): Observable<Product[]> {
    return this.shownProducts$;
  }

  listProductsFromAtoN(from: number, to: number): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(
      this.baseUrl + 'list-products-from-a-to-n/' + from + '/' + to
    ).pipe(
        map(
          productArray => productArray.map(product => Product.of(product)))
      );
    response.subscribe(productArray => this.shownProducts$.next(productArray));
    return response;
  }

  removeProduct(product: Product): void {
    this.httpClient.post(
      this.baseUrl + 'remove-product',
      product
    );
  }

  searchForProductByOptions(optionsObject): Observable<Product[]> {
    return null;
  }

  searchForProductsByName(searchingFor: string): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(
      this.baseUrl + 'search-for-products-by-name' + searchingFor
    );
    response.subscribe(val => this.shownProducts$.next(val));
    return response;
  }
}