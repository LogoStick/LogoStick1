import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from '../../../Models/Product/Product';
import {AbstractProductService} from '../../../Services/ProductServices/AbstractProductService';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.css']
})
export class ProductDisplayerComponent implements OnInit, OnDestroy {
  unsubscriber$ = new Subject();
  shownProducts: Product[];
  constructor(private abstractProductsService: AbstractProductService) { }
  ngOnInit(): void {
    this.abstractProductsService.getShownProducts()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(products => {
        this.shownProducts = products;
      });
    this.abstractProductsService.listProductsFromAtoN(0, 100);
  }
  ngOnDestroy(): void {
    this.unsubscriber$.next();
  }
}
