import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractCartService} from '../../Services/CartService/AbstractCartService';
import {Product} from '../../Models/Product/Product';
import {Cart} from '../../Models/Cart/Cart';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ProductCountPair} from '../../Models/ProductCountPair/ProductCountPair';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit, OnDestroy {
  unsubscriber$ = new Subject();
  cart = this.abstractCartService.getCartSnapshot();
  constructor(public abstractCartService: AbstractCartService) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
