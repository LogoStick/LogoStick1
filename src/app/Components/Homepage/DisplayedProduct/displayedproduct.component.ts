import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../Services/ProductServices/Product';

@Component({
  selector: 'app-displayedproduct',
  templateUrl: './displayedproduct.component.html',
  styleUrls: ['./displayedproduct.component.css']
})
export class DisplayedproductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
