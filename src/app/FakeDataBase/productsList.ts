import {Product} from '../Services/ProductServices/Product';

export let productList: Product[] = [
  new Product().setId(0).setName('Asus'),
  new Product().setId(1).setName('Lenovo'),
  new Product().setId(2).setName('HP'),
  new Product().setId(3).setName('Mac book air')
];
