const async = require('async');
const services = require('./services');
const logger = require('../commons/logger');

module.exports = (test, next) => {
  const testObj = test;

  async.waterfall([
    (callback) => {
      services.sendRequest(testObj.input.request, callback);
    },
  ], (err, result) => {
    if (err) {
      logger.error('Não foi possível executar o test: %j o problema encontrado foi: %s', testObj, err);
    }
    next(err, result);
  });
};
