import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from './Products';

export abstract class AbstractProductService {
  shownProducts$;

  /**
   * searchForProductByName and listProductsFromAtoN always modify shownProducts$
   * addProduct and removeProduct always modify both database and shownProducts$
   */
  protected $shownProducts;
  abstract getShownProducts(): Observable<Product[]>;
  abstract searchForProductsByName(searchingFor: string): Observable<Product[]>;
  abstract searchForProductByCategories(categoriesObject): Observable<Product[]>;
  abstract listProductsFromAtoN(from: number, to: number): Observable<Product[]>;
  abstract addProduct(): Observable<Product>;
  abstract removeProduct(): Observable<Product>;
}

