const db = require('../commons/db');
const logger = require('../commons/logger');


const insertTest = (test, callback) => {
  db.getCollection('tests').insert(test, (err) => {
    if (err) {
      logger.error('Error by inserting test');
    }

    callback(err, test);
  });
};

module.exports = {
  insertTest,
};