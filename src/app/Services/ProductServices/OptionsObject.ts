import {Product} from './Product';

export class OptionsObject {
  private priceRange = {from: 0, to: 0}
  private ramCapacity: number[] = [];
  private storageCapacity: number[] = [];
  private graphicsManufacturers: string[] = [];
  private cpues: string[] = [];
  setPriceRange(from: number, to: number): OptionsObject {
    this.priceRange.from = from;
    this.priceRange.to = to;
    return this;
  }
  setRamCapacity(ramCapacity: number[]): OptionsObject {
    this.ramCapacity = ramCapacity;
    return this;
  }
  setStorageCapacity(storageCapacity: number[]): OptionsObject {
    this.storageCapacity = storageCapacity;
    return this;
  }
  setGraphicsManufacturers(graphicsManufacturers: string[]): OptionsObject {
    this.graphicsManufacturers = graphicsManufacturers;
    return this;
  }
  setCpues(cpues: string[]): OptionsObject {
    this.cpues = cpues;
    return this;
  }
  doesProductMatchPresentOptions(product: Product): boolean {

  return true;
  }
}
