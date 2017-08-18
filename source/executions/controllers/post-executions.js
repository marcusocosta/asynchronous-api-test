const async = require('async');
const uuidv4 = require('uuid/v4');
const testServices = require('../../tests/services');
const processExecution = require('../process-execution');

module.exports = (req, res) => {
  const query = { filters: req.query };
  const executionCode = uuidv4();

  testServices.findTests(query, (errFind, tests) => {
    if (errFind) {
      res.sendStatus(500);
    } else {
      if (tests && tests.length === 0) {
        return res.sendStatus(404);
      }
      async.each(tests, (test, callback) => {
        processExecution(test, executionCode, callback);
      }, () => { });
      res.status(201).send(executionCode);
    }
  });
};
