import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AbstractCartService} from '../../Services/CartService/AbstractCartService';
import {Product} from '../../Models/Product/Product';
import {HttpClient} from '@angular/common/http';
import {productList} from '../../FakeDataBase/productsList';
import {AbstractProductService} from '../../Services/ProductServices/AbstractProductService';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(httpClient: HttpClient, abstractProductsService: AbstractProductService) {
    console.log(abstractProductsService.doesProductExist(1));
  }

  ngOnInit(): void {
  }
}