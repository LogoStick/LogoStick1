import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../Services/ProductServices/Product';

@Component({
  selector: 'app-displayed-product',
  templateUrl: './displayed-product.component.html',
  styleUrls: ['./displayed-product.component.css']
})
export class DisplayedProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
