const model = require('../result-models');

module.exports = (query, executionCode, callback) => {
  model.findAndModify(query, executionCode, callback);
};
