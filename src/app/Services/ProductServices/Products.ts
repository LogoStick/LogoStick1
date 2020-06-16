export class Product {
  private name: string;
  private price: number;
  private imageUrl: string;
  private ramCapacity: number;
  private storageCapacity: number;
  private graphicsManufacturer: string;
  private cpu: string;
  constructor() {
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
}
