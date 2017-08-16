const applyFields = require('./apply-fields');
const uuidv4 = require('uuid/v4');
const merge = require('merge');

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
      identifyFields: applyFields(exp.identifyFields, merge(requestResult, customFields)),
      asserts: applyFields(exp.asserts, merge(requestResult, customFields)),
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
