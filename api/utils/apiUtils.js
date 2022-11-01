const lib = {
  create_response: (success, data) => ({
    success,
    data,
  }),

  error_msg: 'Error Processing',

  getHost: req => `${req.protocol}://${req.get('host')}`,

};

module.exports = (req, res, next) => {
  req.utils = lib;
  next();
};