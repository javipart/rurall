const CountryLayer = require("../utils/countrylayer");
const Ipapi = require("../utils/ipapi");
const ipapi = new Ipapi();
const countrylayer = new CountryLayer();

module.exports = {
  get: async (req, res, next) => {
    let result = false;
    let { default: data = '' } = req;
    try {
      const { models, params } = req;
      const { ip } = params;
      console.log(req.models)
      const isSkip = await req.models.skipList.get(ip).then((response) => {
        return response;
      });
      if(isSkip) {
        throw new Error('IP BLOUEADA PARA CONSULTAS');
      }
      await ipapi.locateIP(ip).then(async (response) => {
        if(response.country_code) {
          await countrylayer.getCountryDetails(response.country_code)
          .then((respCL) => {
            result = true;
            data = {
              iso: response.country_code,
              name: respCL.name,
              flag: response.location.country_flag,
              currency: respCL.currencies[0],
            }
          }).catch((err) => {
            throw (err);
          });
        } else {
          console.log('Viene')
          data.error = 'No existe la IP';
        }
      }).catch((err) => {
        throw (err);
      });
    } catch (err) {
      return next(err);
    }
    return res.response(result, data);
  }
}