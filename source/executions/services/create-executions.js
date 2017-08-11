const applyFields = require('./apply-fields');
const createSatus = require('./create-status');
const uuidv4 = require('uuid/v4');

module.exports = (test, requestResult) => {
  if (test.expected && test.expected.length > 0) {
    const executionCode = uuidv4();
    return test.expected.map(exp => ({
      code: executionCode,
      filters: test.filters,
      test: {
        testCode: test.code,
        description: test.description,
      },
      identifyFields: applyFields(exp.identifyFields, requestResult),
      asserts: exp.asserts,
      requestInfo: requestResult,
      status: createSatus('created', null),
    }));
  }
  return null;
};
