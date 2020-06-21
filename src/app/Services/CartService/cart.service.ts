import { Injectable } from '@angular/core';
import {AbstractCartService} from './AbstractCartService';

@Injectable({
  providedIn: 'root'
})
export class CartService implements AbstractCartService{
  constructor() { }
}
