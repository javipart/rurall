const { MONGO_URL } = require('../utils/constants');

const mongoose = require('mongoose').set('debug', true);

class MongoDatabase {
  constructor() {
    this.mongoose = mongoose;
    this.uri = MONGO_URL;
  }


  connect() {
    this.mongoose.connect(this.uri, (err) => {
      if (err) {
        console.info(err);
      } else {
        console.info(`Successfully connected to MongoDB`);
      }
    });
  }
}

module.exports = new MongoDatabase();
