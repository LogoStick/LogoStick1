import {OptionsObject} from '../OptionsObject/OptionsObject';

export class Product {
  private id: number;
  private name: string;
  private price: number;
  private imageUrl: string;
  private ramCapacity: number;
  private storageCapacity: number;
  private graphicsManufacturer: string;
  private cpu: string;
  constructor() {
  }
  static of(o: any): Product {
    const {id, name, price, imageUrl, ramCapacity, storageCapacity, graphicsManufacturer, cpu} = o;
    return new Product()
      .setId(id)
      .setName(name)
      .setPrice(price)
      .setImageUrl(imageUrl)
      .setRamCapacity(ramCapacity)
      .setStorageCapacity(storageCapacity)
      .setGraphicsManufacturer(graphicsManufacturer)
      .setCpu(cpu);
    return null;
  }
  setId(id: number) {
    this.id = id;
    return this;
  }
  setName(name: string) {
    this.name = name;
    return this;
  }
  setPrice(price: number) {
    this.price = price;
    return this;
  }
  setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
    return this;
  }
  setRamCapacity(ramCapacity: number) {
    this.ramCapacity = ramCapacity;
    return this;
  }
  setStorageCapacity(storageCapacity: number) {
    this.storageCapacity = storageCapacity;
    return this;
  }
  setGraphicsManufacturer(graphicsManufacturer: string) {
    this.graphicsManufacturer = graphicsManufacturer;
    return this;
  }
  setCpu(cpu: string) {
    this.cpu = cpu;
    return this;
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
  getImageUrl(): string {
    return this.imageUrl;
  }
  getRamCapacity(): number {
    return this.ramCapacity;
  }
  getStorageCapacity(): number {
    return this.storageCapacity;
  }
  getGraphicsManufacturer(): string {
    return this.graphicsManufacturer;
  }
  getCpu(): string {
    return this.cpu;
  }
  equals(product: Product) {
    return (
      this.name === product.getName() &&
      this.price === product.getPrice() &&
      this.imageUrl === product.getImageUrl() &&
      this.ramCapacity === product.getRamCapacity() &&
      this.storageCapacity === product.getStorageCapacity() &&
      this.graphicsManufacturer === product.getGraphicsManufacturer() &&
      this.cpu === product.getCpu()
    );
  }
}
