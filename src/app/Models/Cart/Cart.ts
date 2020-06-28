import {ProductCountPair} from '../ProductCountPair/ProductCountPair';


export class Cart {
   private productAmountPairs: ProductCountPair[];
   private countOfProducts: number;
   private totalPrice: number;
   setProductAmountPairs(productAmountPairs: ProductCountPair[]): Cart {
     this.productAmountPairs = productAmountPairs;
     return this;
   }
   setCountOfProducts(countOfProducts: number): Cart {
     this.countOfProducts = countOfProducts;
     return this;
   }
   setTotalPrice(totalPrice: number): Cart {
     this.totalPrice = totalPrice;
     return this;
   }
   getProductAmountPairs(): ProductCountPair[] {
     return this.productAmountPairs;
   }
   getTotalPrice(): number {
     return this.totalPrice;
   }
   getCountOfProducts(): number {
     return this.countOfProducts;
   }
}

