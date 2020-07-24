import {Order} from '../Order/Order';

export class UserDetails {
  private username: string;
  private name: string;
  private surname: string;
  private email: string;
  private address: string;
  private orders: Order[];

  public setUsername(username: string): UserDetails {
    this.username = username;
    return this;
  }
  public setName(name: string): UserDetails {
    this.name = name;
    return this;
  }
  public setSurname(surname: string): UserDetails {
    this.surname = surname;
    return this;
  }
  public setEmail(email: string): UserDetails {
    this.email = email;
    return this;
  }
  public setAddress(address: string): UserDetails {
    this.address = address;
    return this;
  }
  public setOrders(orders: Order[]): UserDetails {
    this.orders = orders;
    return this;
  }

  public getUsername(): string {
    return this.username;
  }
  public getName(): string {
    return this.name;
  }
  public getSurname(): string {
    return this.surname;
  }
  public getEmail(): string {
    return this.email;
  }
  public getAddress(): string {
    return this.address;
  }
  public getOrders(): Order[] {
    return this.orders;
  }
}
