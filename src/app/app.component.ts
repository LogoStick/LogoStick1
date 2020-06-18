import { Component } from '@angular/core';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {FakeDBService} from './FakeDataBase/fake-db.service';
import {Product} from './Services/ProductServices/Products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shownProds: Product[];
  constructor(private abstractProductsService: AbstractProductService) {
    abstractProductsService.getShownProducts().subscribe(val => this.shownProds = val);
    abstractProductsService.listProductsFromAtoN(0, 100);
    abstractProductsService.addProduct(new Product().setName('asus'));
    abstractProductsService.addProduct(new Product().setName('lenovo'));
    setTimeout(() => {
      abstractProductsService.addProduct(new Product().setName('kek'));
    }, 1000)
    console.log(this.shownProds);
    setTimeout(() => {
      abstractProductsService.removeProduct(new Product().setName('kek'));
    }, 3000);
  }
}
