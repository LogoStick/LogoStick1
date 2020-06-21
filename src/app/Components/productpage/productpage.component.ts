import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractProductService} from '../../Services/ProductServices/AbstractProductService';
import {Product} from '../../Services/ProductServices/Product';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  product: Product;
  constructor(private activatedRoute: ActivatedRoute) {
    this.product = this.activatedRoute.snapshot.data.product;
  }
  ngOnInit(): void {
  }

}
