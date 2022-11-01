const RestClient = require('./restClient');
const constants = require('./constants');

module.exports = class Ipapi extends RestClient {
  constructor() {
    super(constants.IPAPI_URL, 'Ipapi', 'status');
  };

  
};