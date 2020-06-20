import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractProductService} from '../../../Services/ProductServices/AbstractProductService';
import {Product} from '../../../Services/ProductServices/Product';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-productdisplayer',
  templateUrl: './productdisplayer.component.html',
  styleUrls: ['./productdisplayer.component.css']
})
export class ProductdisplayerComponent implements OnInit, OnDestroy {
  subscriptionDestroyer$ = new Subject();
  showsProducts: Product[] = [];
  constructor(private abstractProductsService: AbstractProductService) {
  }

  ngOnInit(): void {
    // PRODUCT INITER
    this.abstractProductsService.addProduct(new Product().setName('kek').setPrice(1000));
    this.abstractProductsService.addProduct(new Product().setName('check').setPrice(10000));
    // FINITO
    this.abstractProductsService.getShownProducts()
      .pipe(takeUntil(this.subscriptionDestroyer$))
      .subscribe(value => this.showsProducts = value);
    this.abstractProductsService.listProductsFromAtoN(0, 100);
  }
  ngOnDestroy(): void {
    this.subscriptionDestroyer$.next();
  }

}
