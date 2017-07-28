
var later = require('later');
const services = require('../services');
const executionServices = require('../../executions/services');

module.exports = (req, res) => {

  services.createTest(req.body, (err, resCreate) => {
    console.log(resCreate);
    if (err) {
      res.sendStatus(500);
    } else {
      executionServices.createExecution(resCreate, (err, resExecution) => {
        if(err) {
          return res.sendStatus(500);
        }
        res.sendStatus(201);
      });
    }
  });
};
