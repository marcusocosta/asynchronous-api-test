const async = require('async');
const executionServices = require('./services');
const resultServices = require('../results/services');
const logger = require('../commons/logger');

const processCallbackExecution = (executions) => {
  async.each(executions, (execution, callback) => {
    const queryFindResult = execution.identifyFields;
    resultServices.findAndModifyResults(queryFindResult, execution.code,
      (errFindResult, result) => {
        if (result) {
          const hasError = executionServices.executeAsserts(execution.asserts, result);
          executionServices.updateExecutions(
            { _id: execution._id }, {
              result,
              status:
              executionServices.createStatus(
                hasError ? 'error' : 'success', hasError, execution.status),
            }, () => { });
        }
      });
    callback();
  }, () => {
  });
};

const start = () => {
  setInterval(() => {
    executionServices.findExecutions({ 'status.lastStatus': 'created' }, (err, executions) => {
      if (err) {
        logger.error('Falha ao buscar as execuções na base de dados.');
      }
      processCallbackExecution(executions);
    });
  }, 10000);
};

module.exports = {
  start,
};
