const mongoose = require('mongoose');

const schema = new Schema({
  ip: {
    type: String,
    required: true,
    index: true,
  },
  details: {
    type: String,
    required: true,
  },
});

schema.statics.get = function get(ip) {
  return this.findOne({ ip });
};

module.exports = mongoose.model('skipList', schema);
