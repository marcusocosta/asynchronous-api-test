
const models = require('../test-models');

module.exports = (query, callback) => {
  models.find(query, callback);
};
