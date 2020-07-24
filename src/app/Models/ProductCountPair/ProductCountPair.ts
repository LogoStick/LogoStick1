import {Product} from '../Product/Product';

export class ProductCountPair {
  private product: Product;
  private count: number;

  setProduct(product: Product): ProductCountPair {
    this.product = product;
    return this;
  }
  setCount(count: number): ProductCountPair {
    this.count = count;
    return this;
  }
  increaseCountByOne(): ProductCountPair {
    this.count++;
    return this;
  }
  decreaseCountByOne(): ProductCountPair {
    this.count--;
    return this;
  }
  getCount(): number {
    return this.count;
  }
  getProduct(): Product {
    return this.product;
  }
  equals(productCountPair: ProductCountPair): boolean {
    return (
      this.count === productCountPair.getCount() &&
      this.product === productCountPair.getProduct()
    );
  }
  productOfPairEquals(product: Product): boolean {
    return this.product.equals(product);
  }
}
