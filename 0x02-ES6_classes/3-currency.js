export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
