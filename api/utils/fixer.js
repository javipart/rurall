const RestClient = require('./restClient');
const constants = require('./constants');

module.exports = class Fixer extends RestClient {
  constructor() {
    super(constants.FIXER_URL, 'Fixer', 5000, constants.FIXER_TOKEN);
  };

  getCurrentPrice(from, to) {
    return this.sendData(`convert?to=${to}&from=${from}&amount=1`, 'get').then((response) => {
      const { success, result } = response;
      if (!success) {
        throw new Error(constants.errorMsg);
      }
      return result;
    });
  }
};