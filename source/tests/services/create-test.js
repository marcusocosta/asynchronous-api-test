
const uuidv4 = require('uuid/v4');
const later = require('later');
const models = require('../test-models');
const getNextExecution = require('./get-next-execution');

module.exports = (test, callback) => {
  let obj = test;
  obj.code = uuidv4();
  obj.nextExecution = getNextExecution(test.when);

  models.insert(obj, callback);
};
