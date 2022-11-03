const RestClient = require('./restClient');
const constants = require('./constants');

module.exports = class Ipapi extends RestClient {
  constructor() {
    super(constants.IPAPI_URL, 'Ipapi', 'status');
  };

  locateIP(ip) {
    return this.sendData(`${ip}?access_key=${constants.IPAPI_TOKEN}`, 'get').then((result) => {
      if(result.error) {
        throw new Error(constants.errorMsg);
      }
      return result;
    });
  }
};