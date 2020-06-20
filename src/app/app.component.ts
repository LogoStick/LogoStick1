import { Component } from '@angular/core';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {Product} from './Services/ProductServices/Product';
import {OptionsObject} from './Services/ProductServices/OptionsObject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private abstractProductsService: AbstractProductService) {

  }
}
