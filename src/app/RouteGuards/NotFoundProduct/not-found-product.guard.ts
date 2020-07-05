import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AbstractProductService} from '../../Services/ProductServices/AbstractProductService';

@Injectable({
  providedIn: 'root'
})
export class NotFoundProductGuard implements CanActivate {
  constructor(private router: Router, private abstractProductsService: AbstractProductService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.abstractProductsService.doesProductExistById(Number(next.params.id)).subscribe((response) => {
      if (response === false) {
        this.router.navigateByUrl('not-found-product-page');
      }
    })
    return this.abstractProductsService.doesProductExistById(Number(next.params.id));
  }

}
