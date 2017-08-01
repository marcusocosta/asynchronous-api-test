

const models = require('../execution-models');
const buildExecutions = require('./build-executions');

module.exports = (test, callback) => {


  const executions = buildExecutions(test);
console.log(executions);
  models.insertExecution(executions, callback);
};