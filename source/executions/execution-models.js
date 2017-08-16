const db = require('../commons/db');
const logger = require('../commons/logger');

const insert = (executions, callback) => {
  db.getCollection('executions').insert(executions, (err) => {
    if (err) {
      logger.error('Error by inserting executions');
    }

    callback(err, executions);
  });
};

const find = (query, callback) => {
  db.getCollection('executions').find(query).toArray((err, executions) => {
    if (err) {
      logger.error('Error by finding executions');
    }

    callback(err, executions);
  });
};

const update = (query, set, callback) => {
  db.getCollection('executions').update(query, { $set: set }, (err) => {
    if (err) {
      logger.error('Error by updating executions');
    }
    callback(err);
  });
};

module.exports = {
  insert,
  find,
  update,
};
