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

const findAndModify = (query, executionCode, callback) => {
  db.getCollection('results').findAndModify(
    query,
    [['_id', 'asc']],
    {
      $set: {
        executionCode, resultStatus: 'closed',
      },
    },
    {
      remove: true,
    }, (err, results) => {
      if (err) {
        logger.error('Error by finding results');
      }

      callback(err, results.value);
    });
};

module.exports = {
  insert,
  findAndModify,
};
