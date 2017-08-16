const applyFields = require('./apply-fields');
const uuidv4 = require('uuid/v4');

module.exports = (test, requestResult, customFields, status) => {
  const executionCode = uuidv4();
  if (test.expected && test.expected.length > 0) {
    return test.expected.map(exp => ({
      code: executionCode,
      filters: test.filters,
      customFields,
      test: {
        testCode: test.code,
        description: test.description,
      },
      identifyFields: applyFields(exp.identifyFields, requestResult),
      asserts: exp.asserts,
      requestInfo: requestResult,
      status,
    }));
  }
  return {
    code: executionCode,
    filters: test.filters,
    customFields,
    test: {
      testCode: test.code,
      description: test.description,
    },
    status,
  };
};
