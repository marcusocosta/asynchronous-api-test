
const moment = require('moment');
const testServices = require('../../tests/services');

module.exports = (callback) => {
  const now = moment().toDate();
  const query = {
    nextExecution : {$lte : now}
  };
  testServices.findTests(query, callback);
};