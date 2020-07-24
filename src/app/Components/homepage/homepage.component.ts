import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AbstractCartService} from '../../Services/CartService/AbstractCartService';
import {Product} from '../../Models/Product/Product';
import {HttpClient} from '@angular/common/http';
import {productList} from '../../FakeDataBase/productsList';
import {AbstractProductService} from '../../Services/ProductServices/AbstractProductService';
import {AbstractAuthService} from '../../Services/AuthService/AbstractAuthService';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(httpClient: HttpClient, abstractProductsService: AbstractProductService) {
  }

  ngOnInit(): void {
  }
}
