const services = require('../services');

module.exports = (req, res) => {
  const executionCode = req.params.executionCode;
  if (!executionCode) {
    return res.sendStatus(404);
  }
  const query = { executionCode };

  services.findExecutions(query, (err, executions) => {
    if (err) {
      return res.sendStatus(500);
    }

    res.status(200).send(services.executionsHal(executions));
  });
};
