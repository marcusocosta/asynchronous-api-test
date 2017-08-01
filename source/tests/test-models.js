const db = require('../commons/db');
const logger = require('../commons/logger');


const insert = (test, callback) => {
  db.getCollection('tests').insert(test, (err) => {
    if (err) {
      logger.error('Error by inserting test');
    }

    callback(err, test);
  });
};

const update = (query, set, callback) => {
  db.getCollection('tests').update(query, { $set: set }, (err) => {
    if (err) {
      logger.error('Error by updating test');
    }

    callback(err, test);
  });
};

const find = (query, callback) => {
  db.getCollection('tests').find(query).toArray((err, tests) => {
    if (err) {
      logger.error('Error by finding tests');
    }

    callback(err, tests);
  });
};

module.exports = {
  insert,
  find,
  update,
};