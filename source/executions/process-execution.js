const async = require('async');
const services = require('./services');
const logger = require('../commons/logger');
const executionModels = require('./execution-models');

module.exports = (test, next) => {
  const testObj = test;

  async.waterfall([
    (callback) => {
      const customFields = services.customTypes(testObj.input.customFields);
      if (!customFields) {
        return callback('Não foi possível criar os campos customizados.');
      }
      services.sendRequest(testObj.input.request, customFields, (err, requestResult) => {
        callback(err, requestResult, customFields);
      });
    },
    (requestResult, customFields, callback) => {
      const hasError = services.executeAsserts(testObj.input.asserts, requestResult);
      const executions = services.createExecutions(testObj, requestResult,
        customFields, services.createStatus('created'));
      if (hasError) {
        return callback(hasError);
      }
      if (executions && executions.length > 0) {
        executionModels.insert(executions, (err) => {
          callback(err, executions);
        });
      } else {
        callback('Não foi possível criar as execuções do test');
      }
    },
  ], (err, result) => {
    if (err) {
      logger.error('Não foi possível executar o test: %s o problema encontrado foi: %s', testObj.code, err);
      delete testObj.expected;
      const executions = services.createExecutions(testObj, undefined,
        undefined, services.createStatus('error', err));
      executionModels.insert(executions, () => { });
      return next(err);
    }
    logger.info('Execução criadas com sucesso: %j', result);
    next(null, result);
  });
};
