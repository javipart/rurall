const Fixer = require("../utils/fixer");
const fixer = new Fixer();

module.exports = {
  get: async (req, res, next) => {
    let result = false;
    let { default: data = '' } = req;
    try {
      const { models, params } = req;
      const { from, to } = params;
      await fixer.getCurrentPrice(from, to).then((response) => {
        result = true;
        data = response;
      });
    } catch (err) {
      return next(err);
    }
    return res.response(result, data);
  }
}