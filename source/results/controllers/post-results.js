
const services = require('../services');

module.exports = (req, res) => {
  services.createResult(req.body, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
};
