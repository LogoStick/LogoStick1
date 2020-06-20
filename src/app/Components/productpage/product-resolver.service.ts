import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../../Services/ProductServices/Product';
import {Observable} from 'rxjs';
import {AbstractProductService} from '../../Services/ProductServices/AbstractProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product>{

  constructor(private abstractProductsService: AbstractProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    const productId = Number(route.params.id);
    return this.abstractProductsService.getProductById(productId);
  }
}
