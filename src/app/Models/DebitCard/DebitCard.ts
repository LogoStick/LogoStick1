export class DebitCard {
  private cardNumber: number;
  private holderName: string;
  private expiryDateMonth: number;
  private expiryDateYear: number;
  private cvv2: number;
  private password: string;
  private balance: number;
  setCardNumber(cardNumber: number): DebitCard {
    this.cardNumber = cardNumber;
    return this;
  }
  setHolderName(holderName: string): DebitCard {
    this.holderName = holderName;
    return this;
  }
  setExpiryDateMonth(expiryDateMonth: number): DebitCard {
    this.expiryDateMonth = expiryDateMonth;
    return this;
  }
  setExpiryDateYear(expiryDateYear: number): DebitCard {
    this.expiryDateYear = expiryDateYear;
    return this;
  }
  setCvv2(cvv2: number): DebitCard {
    this.cvv2 = cvv2;
    return this;
  }
  setPassword(password: string): DebitCard {
    this.password = password;
    return this;
  }
  setBalance(balance: number): DebitCard {
    this.balance = balance;
    return this;
  }
  getCardNumber(): number {
    return this.cardNumber;
  }
  getHolderName(): string {
    return this.holderName;
  }
  getExpiryMonth(): number {
    return this.expiryDateMonth;
  }
  getExpiryYear(): number {
    return this.expiryDateYear;
  }
  getPassword(): string {
    return this.password;
  }
  getCvv2(): number {
    return this.cvv2;
  }
  getBalance(): number {
    return this.balance;
  }
  equals(debitCard: DebitCard): boolean {
    return (
      this.cardNumber === debitCard.getCardNumber() &&
      this.cvv2 === debitCard.getCvv2() &&
      this.password === debitCard.getPassword() &&
      this.expiryDateYear === debitCard.getExpiryYear() &&
      this.expiryDateMonth === debitCard.getExpiryMonth()
    );
  }
}
