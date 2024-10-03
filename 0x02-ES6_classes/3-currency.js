export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() { return this._name; }

  get code() { return this._code; }

  set name(x) { this._name = x; }

  set code(x) { this._code = x; }

  displayFullCurrency() {
    return `${name} (${code})`;
  }
}
