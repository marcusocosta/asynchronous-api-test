const async = require('async');
const executionServices = require('./services');
const resultServices = require('../results/services');
const logger = require('../commons/logger');

const processCallbackExecution = (executions) => {
  async.each(executions, (execution, callback) => {
    const queryFindResult = execution.identifyFields;
    queryFindResult.resultStatus = 'created';
    resultServices.findAndModifyResults(queryFindResult, execution.code,
      (errFindResult, results) => {
        if (results) {
          const hasError = executionServices.executeAsserts(execution.asserts, results);
          executionServices.updateExecutions(
            { _id: execution._id }, {
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
  }, 1000);
};

module.exports = {
  start,
};
