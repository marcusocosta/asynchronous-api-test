const _ = require('lodash');
const assert = require('chai').assert;

module.exports = (asserts, obj) => {
  const properties = asserts.hasProperties;
  const values = asserts.hasValues;
  let hasError = null;
  if (properties && properties.length > 0) {
    try {
      properties.forEach((prop) => {
        assert.nestedProperty(obj, prop);
      });
    } catch (error) {
      hasError = error;
    }
  }

  if (values && values.length > 0) {
    try {
      values.forEach((prop) => {
        assert.equal(prop.value, _.get(obj, prop.property));
      });
    } catch (error) {
      hasError = error;
    }
  }

  return hasError;
};
