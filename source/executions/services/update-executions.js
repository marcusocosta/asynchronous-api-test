const model = require('../execution-models');

module.exports = (query, set, callback) => {
  model.update(query, set, callback);
};
