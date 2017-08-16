const async = require('async');
const testServices = require('../../tests/services');
const processExecution = require('../process-execution');

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
        processExecution(test, callback);
      }, () => { });
      res.sendStatus(201);
    }
  });
};
