import {Observable} from 'rxjs';
import {Cart} from '../../Models/Cart/Cart';
import {Product} from '../../Models/Product/Product';

export abstract class AbstractCartService {
  abstract getCartSnapshot(): Cart;
  abstract getCart$(): Observable<Cart>;
  abstract addProduct(product: Product): void;
  abstract removeProduct(product: Product): void;
  abstract setCountOfProduct(product: Product, amount: number): void;
  abstract increaseCountOfProductByOne(product: Product): void;
  abstract decreaseCountOfProductByOne(product: Product): void;
}
