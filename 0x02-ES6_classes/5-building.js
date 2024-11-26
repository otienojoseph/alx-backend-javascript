export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = value;
  }

  // Abstract method
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
