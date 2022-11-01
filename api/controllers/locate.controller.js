module.exports = {
  get: async (req, res, next) => {
    let result = false;
    let { default: data = '' } = req;
      try {
        const { models, params } = req;
        const { currency } = params;
        
      } catch (err) {
        return next(err);
      }
      return res.response(result, data);
  }
}