
const uuidv4 = require('uuid/v4');
const models = require('../test-models');

module.exports = (test, callback) => {
  const obj = test;
  obj.code = uuidv4();

  models.insert(obj, callback);
};
