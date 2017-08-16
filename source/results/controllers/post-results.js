
const services = require('../services');

module.exports = (req, res) => {
  const result = req.body;
  result.resultStatus = 'created';
  services.createResult(req.body, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
};
