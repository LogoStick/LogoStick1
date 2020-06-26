import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../Models/Product/Product';
import {Observable} from 'rxjs';
import {AbstractProductService} from '../Services/ProductServices/AbstractProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductPageResolverService implements Resolve<Product>{

  constructor(private abstractProductsService: AbstractProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    return this.abstractProductsService.getProductById(Number(route.params.id));
  }
}
