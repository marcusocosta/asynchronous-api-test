const request = require('request');
const logger = require('../../commons/logger');

module.exports = (requestParams, callback) => {
  const requestConfig = {
    uri: requestParams.uri,
    method: requestParams.method,
    headers: requestParams.headers,
    authorization: requestParams.authorization,
    body: requestParams.body,
  };

  request(requestConfig, (error, response, body) => {
    if (error) {
      logger.error('Não foi possível fazer a requisição: %j', requestConfig);
      return callback(error);
    }

    console.log(body);

    callback(null, body);
  });
};
