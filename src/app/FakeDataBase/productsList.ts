import {Product} from '../Models/Product/Product';

export let productList: Product[] = [
  new Product().setId(0).setName('Asus').setPrice(1000),
  new Product().setId(1).setName('Lenovo').setPrice(1500),
  new Product().setId(2).setName('HP').setPrice(2700),
  new Product().setId(3).setName('Mac book air').setPrice(5600),
];
