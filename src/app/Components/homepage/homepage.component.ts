import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AbstractCartService} from '../../Services/CartService/AbstractCartService';
import {Product} from '../../Models/Product/Product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
