import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(x) { this._amount = x; }

  set currency(x) { this._currency = x; }

  displayFullPrice() {
    return `${amount} ${currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
