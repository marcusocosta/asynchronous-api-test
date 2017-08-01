const uuidv4 = require('uuid/v4');

module.exports = (test) => {
  const executionCode = uuidv4();

  return test.expected.map(exp => {
    return {
      code: executionCode,
      testCode: test.code,
      test: {

        description: test.description,
        filters: test.filters,
        input: test.input,
      },
      identifyFields: exp.identifyFields,
      asserts: exp.asserts,
    }
  });
};