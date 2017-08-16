const async = require('async');
const testServices = require('../../tests/services');
const execution = require('../index');

module.exports = (req, res) => {
  const query = { filters: req.query };

  testServices.findTests(query, (errFind, tests) => {
    if (errFind) {
      res.sendStatus(500);
    } else {
      if (tests && tests.length === 0) {
        return res.sendStatus(404);
      }
      async.each(tests, (test, callback) => {
        execution(test, callback);
      }, () => {
        res.sendStatus(201);
      });
    }
  });
};
