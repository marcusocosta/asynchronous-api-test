const db = require('../commons/db');
const logger = require('../commons/logger');

const insertExecution = (execution, callback) => {
  db.getCollection('executions').insert(execution, (err) => {
    if (err) {
      logger.error('Error by inserting execution');
    }

    callback(err, execution);
  });
};

const findExecutions = (query, callback) => {
  db.getCollection('executions').find(query).toArray((err, executions) => {
    if (err) {
      logger.error('Error by finding executions');
    }

    callback(err, executions);
  });
};

module.exports = {
  insertExecution,
  findExecutions,
};