import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../Models/Product/Product';

export abstract class AbstractProductService {
  shownProducts$;

  /**
   * searchForProductByName and listProductsFromAtoN always modify shownProducts$
   * addProduct and removeProduct always modify both database and shownProducts$
   */
  abstract getProductById(id: number): Observable<Product>;
  abstract doesProductExistById(id: number): Observable<boolean>;
  abstract doesProductExist(product: Product): Observable<boolean>;
  abstract getShownProducts(): Observable<Product[]>;
  abstract searchForProductsByName(searchingFor: string): Observable<Product[]>;
  abstract searchForProductByOptions(optionsObject): Observable<Product[]>;
  abstract listProductsFromAtoN(from: number, to: number): Observable<Product[]>;
  abstract addProduct(product: Product): void;
  abstract removeProduct(product: Product): void;
}

