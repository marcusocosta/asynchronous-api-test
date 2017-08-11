const db = require('../commons/db');
const logger = require('../commons/logger');


const insert = (result, callback) => {
  db.getCollection('results').insert(result, (err) => {
    if (err) {
      logger.error('Error by inserting result');
    }

    callback(err, result);
  });
};

const find = (query, callback) => {
  db.getCollection('results').find(query).toArray((err, results) => {
    if (err) {
      logger.error('Error by finding results');
    }

    callback(err, results);
  });
};

module.exports = {
  insert,
  find,
};
