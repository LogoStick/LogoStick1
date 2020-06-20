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
    this.abstractProductsService.getShownProducts()
      .pipe(takeUntil(this.subscriptionDestroyer$))
      .subscribe(value => this.showsProducts = value);
  }
  ngOnDestroy(): void {
    this.subscriptionDestroyer$.next();
  }

}
