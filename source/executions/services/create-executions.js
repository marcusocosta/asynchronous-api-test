const applyFields = require('./apply-fields');
const uuidv4 = require('uuid/v4');

module.exports = (test, requestResult) => {
  if (test.expected && test.expected.length > 0) {
    const executionCode = uuidv4();
    return test.expected.map(exp => ({
      code: executionCode,
      test: {
        testCode: exp.code,
        description: exp.description,
      },
      identifyFields: applyFields(exp.identifyFields, requestResult),
      asserts: exp.asserts,
      requestInfo: requestResult,
    }));
  }
  return null;
};
