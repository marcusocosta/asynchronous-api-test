
const uuidv4 = require('uuid/v4');
const models = require('../test-models');
const later = require('later');

module.exports = (test, callback) => {
  let obj = test;
  obj.code = uuidv4();

  models.insertTest(obj, callback);
};
