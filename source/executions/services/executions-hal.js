module.exports = (executions) => {
  const executionHal = executions.map(execution => ({
    code: execution.code,
    executionCode: execution.executionCode,
    filters: execution.filters,
    test: execution.test,
    status: execution.status,
  }));

  return executionHal;
};
