const Validation = require('./index');
const { PRICE_ERROR_MESSAGE } = require('../lib/Constants');

class PriceValidation extends Validation {
  constructor(answer) {
    super();
    this.answer = answer;
  }

  validate() {
    this.checkIsEmpty();
    this.checkIsNumber();
    this.checkIsUnitNumber();
  }

  checkIsEmpty() {
    if (this.answer === null || this.answer === undefined || this.answer === '') {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkIsNumber() {
    const regExp = /^[0-9]+$/;
    if (!regExp.test(this.answer)) {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_number);
    }
    return true;
  }

  checkIsUnitNumber() {
    const price = Number(this.answer);
    if (price % 1000 !== 0) {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_unit_number);
    }
    return true;
  }
}

module.exports = PriceValidation;
