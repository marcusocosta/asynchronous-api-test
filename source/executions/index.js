const async = require('async');
const services = require('./services');
const logger = require('../commons/logger');

module.exports = (test, next) => {
  const testObj = test;

  async.waterfall([
    (callback) => {
      services.sendRequest(testObj.input.request, callback);
    },
    (requestResult, callback) => {
      const hasError = services.executeAsserts(testObj.input.asserts, requestResult);
      if (hasError) {
        return callback(hasError);
      }
      callback();
    },
  ], (err, result) => {
    if (err) {
      logger.error('Não foi possível executar o test: %j o problema encontrado foi: %s', testObj, err);
      return next(err, null);
    }
    next(null, result);
  });
};
