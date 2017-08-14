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
        return callback(true);
      }
      services.sendRequest(testObj.input.request, customFields, (err, requestResult) => {
        callback(err, requestResult, customFields);
      });
    },
    (requestResult, customFields, callback) => {
      const hasError = services.executeAsserts(testObj.input.asserts, requestResult);
      const executions = services.createExecutions(testObj, requestResult, customFields);
      if (hasError) {
        return callback(hasError);
      }
      if (executions && executions.length > 0) {
        executionModels.insert(executions, (err) => {
          if (err) {
            return callback(hasError);
          }
        });
        callback(null, executions);
      }
    },
  ], (err, result) => {
    if (err) {
      logger.error('Não foi possível executar o test: %j o problema encontrado foi: %s', testObj, err);
      return next(err, null);
    }
    next(null, result);
  });
};
