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
  product: Product = new Product();
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private  abstractProductsService: AbstractProductService) {
    const productId = Number(activatedRoute.snapshot.params.id);
    this.abstractProductsService.getProductById(productId).subscribe(product => {
      if (product === undefined) {
        router.navigateByUrl('');
      } else {
        this.product = product;
      }
    });
  }

  ngOnInit(): void {
  }

}
