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

module.exports = {
  insertExecution,
};