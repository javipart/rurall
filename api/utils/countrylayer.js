const RestClient = require('./restClient');
const constants = require('./constants');

module.exports = class CountryLayer extends RestClient {
  constructor() {
    super(constants.COUNTRYLAYER_URL, 'CountryLayer', 'status');
  };

  
};