const RestClient = require('./restClient');
const constants = require('./constants');

module.exports = class Fixer extends RestClient {
  constructor() {
    super(constants.FIXER_URL, 'Fixer', 'status');
  };

  
};