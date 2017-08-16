const _ = require('lodash');
const assert = require('chai').assert;
const logger = require('../../commons/logger');

module.exports = (asserts, obj) => {
  const properties = asserts.hasProperties;
  const values = asserts.hasValues;
  if (properties && properties.length > 0) {
    try {
      properties.forEach((prop) => {
        assert.nestedProperty(obj, prop);
      });
    } catch (error) {
      logger.error('Erro ao fazer assert das propriedades, %d', error);
      return error;
    }
  }

  if (values && values.length > 0) {
    try {
      values.forEach((prop) => {
        assert.equal(prop.value, _.get(obj, prop.property));
      });
    } catch (error) {
      logger.error('Erro ao fazer assert dos valores, %d', error);
      return error;
    }
  }
  logger.info('Asserts executados.');
  return null;
};
