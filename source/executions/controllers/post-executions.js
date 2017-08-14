const async = require('async');
const testServices = require('../../tests/services');
const execution = require('../index');

module.exports = (req, res) => {
  testServices.findTests({}, (errFind, tests) => {
    if (errFind) {
      res.sendStatus(500);
    } else {
      async.each(tests, (test, callback) => {
        execution(test, callback);
      }, (err) => {
        if (err) {
          return res.sendStatus(500);
        }
        res.sendStatus(201);
      });
    }
  });
};
