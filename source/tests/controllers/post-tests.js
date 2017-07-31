
const services = require('../services');
const executionServices = require('../../executions/services');

module.exports = (req, res) => {
  services.createTest(req.body, (err, resCreate) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
};
