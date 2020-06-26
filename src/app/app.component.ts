import { Component } from '@angular/core';
import {AbstractProductService} from './Services/ProductServices/AbstractProductService';
import {Product} from './Models/Product/Product';
import {OptionsObject} from './Models/OptionsObject/OptionsObject';
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
