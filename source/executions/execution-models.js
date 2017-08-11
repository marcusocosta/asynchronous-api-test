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

module.exports = {
  insert,
};
