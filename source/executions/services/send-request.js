const request = require('request');
const logger = require('../../commons/logger');

module.exports = (requestParams, callback) => {
  const requestConfig = {
    uri: requestParams.uri,
    method: requestParams.method,
    headers: requestParams.headers,
    authorization: requestParams.authorization,
    body: requestParams.body,
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
