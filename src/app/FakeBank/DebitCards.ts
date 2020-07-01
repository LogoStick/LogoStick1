import {DebitCard} from '../Models/DebitCard/DebitCard';

export let DebitCards: DebitCard[] = [
  new DebitCard()
    .setHolderName('Ilya Nasiri')
    .setCardNumber(6104448815269876)
    .setCvv2(3490)
    .setPassword('1010')
    .setExpiryDateMonth(9)
    .setExpiryDateYear(2050)
    .setBalance(1000000),
  new DebitCard()
    .setHolderName('Vasya Kokosovich')
    .setCardNumber(6104339987674576)
    .setCvv2(3490)
    .setPassword('2020')
    .setExpiryDateMonth(9)
    .setExpiryDateYear(2050)
    .setBalance(1000000)
];
