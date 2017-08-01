const services = require('./services')
const async = require('async');

const processNextExecutions = (next) => {
  services.findNextExecutions((err, tests) => {
    async.each(tests, function (test, callback) {
      services.createExecution(test, callback);
    }, function (err) {
      if (err) {
        console.log('A file failed to process');
      }
      next(err);
    });
  });
};

const init = () => {
  async.forever(
    function (next) {
      setTimeout(() => {
        processNextExecutions(next);
      }, 10000);
    },
    function (err) {
      // if next is called with a value in its first parameter, it will appear
      // in here as 'err', and execution will stop.
    }
  );
};

module.exports = {
  init,
};