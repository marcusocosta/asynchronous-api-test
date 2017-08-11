const applyFields = require('./apply-fields');

module.exports = (test, requestResult) => {
  if (test.expected && test.expected.length > 0) {
    return test.expected.map(exp => ({
      identifyFields: applyFields(exp.identifyFields, requestResult),
      asserts: exp.asserts,
      requestInfo: requestResult,
    }));
  }
  return null;
};
