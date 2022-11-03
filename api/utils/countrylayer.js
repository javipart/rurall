const RestClient = require('./restClient');
const constants = require('./constants');

module.exports = class CountryLayer extends RestClient {
  constructor() {
    super(constants.COUNTRYLAYER_URL, 'CountryLayer', 'status');
  };

  getCountryDetails(code) {
    return this.sendData(`alpha/${code}`, 'get')
      .then((response) => {
        if(response.name) {
          return response;
        }
        throw new Error(constants.errorMsg);
      });
  }
};