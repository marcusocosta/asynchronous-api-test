const model = require('../execution-models');

module.exports = (query, callback) => {
  model.find(query, callback);
};
