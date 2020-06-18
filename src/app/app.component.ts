import { Component } from '@angular/core';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {FakeDBService} from './FakeDataBase/fake-db.service';
import {Product} from './Services/ProductServices/Products';
import {fromEvent, Observable, Subject} from 'rxjs';
import {debounceTime, delay, throttleTime} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shownProds: Product[];
  constructor(private abstractProductsService: AbstractProductService) {
    this.abstractProductsService.getShownProducts().subscribe(value => this.shownProds = value);
    this.abstractProductsService.listProductsFromAtoN(0, 100);
  }
}
