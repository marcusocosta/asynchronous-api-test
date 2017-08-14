const request = require('request');
const logger = require('../../commons/logger');
const applyFields = require('./apply-fields');

module.exports = (requestParams, customFields, callback) => {
  const requestConfig = {
    uri: requestParams.uri,
    method: requestParams.method,
    headers: requestParams.headers,
    authorization: requestParams.authorization,
    body: applyFields(requestParams.body, customFields),
    json: true,
  };

  request(requestConfig, (error, response) => {
    if (error) {
      logger.error('Não foi possível fazer a requisição: %j', requestConfig);
      return callback(error, null);
    }

    callback(null, response.body);
  });
};
