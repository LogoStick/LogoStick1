import { Injectable } from '@angular/core';
import {AbstractProductService} from '../AbstractProductService';
import {Product} from '../../../Models/Product/Product';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {baseProductServiceUrl} from '../../../BaseUrls/BaseUrls';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DateBaseProductService extends AbstractProductService{

  constructor(private httpClient: HttpClient) {
    super();
    this.shownProducts$ = new Subject<Product[]>();
  }
  private baseUrl = baseProductServiceUrl ;
  public shownProducts$: Subject<Product[]>;

  addProduct(product: Product): void {
    this.httpClient
      .post(this.baseUrl + 'add-product', JSON.stringify(product)).subscribe();
  }

  doesProductExistById(id: number): Observable<boolean> {
    const response = this.httpClient.get<boolean>(
      this.baseUrl + 'does-product-exist-by-id/' + id,
    );
    return response;
  }

  getProductById(id: number): Observable<Product> {
    const response = this.httpClient
      .get<Product>(this.baseUrl + 'get-product-by-id/' + id)
      .pipe(map(responseProduct => Product.of(responseProduct)));
    return response;
  }

  getShownProducts(): Observable<Product[]> {
    return this.shownProducts$;
  }

  listProductsFromAtoN(from: number, to: number): Observable<Product[]> {
    const response = this.httpClient
      .get<Product[]>(this.baseUrl + 'list-products-from-a-to-n/' + from + '/' + to)
      .pipe(map(responseProducts => {
        return responseProducts.map(responseProduct => Product.of(responseProduct));
      }));
    response.subscribe(productArray => this.shownProducts$.next(productArray));
    return response;
  }

  removeProduct(product: Product): void {
    this.httpClient.post(this.baseUrl + 'remove-product', JSON.stringify(product)).subscribe();
  }

  searchForProductByOptions(optionsObject): Observable<Product[]> {
    return null;
  }

  searchForProductsByName(searchingFor: string): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(this.baseUrl + 'search-for-products-by-name/' + searchingFor)
      .pipe(
        map(passedProducts => passedProducts.map(product => Product.of(product)))
      );
    response.subscribe(responseProducts => this.shownProducts$.next(responseProducts));
    return response;
  }

  doesProductExist(product: Product): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + 'does-product-exist', product);
  }

}

