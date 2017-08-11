
const uuidv4 = require('uuid/v4');
const models = require('../result-models');

module.exports = (result, callback) => {
  const obj = result;
  obj.code = uuidv4();

  models.insert(obj, callback);
};
