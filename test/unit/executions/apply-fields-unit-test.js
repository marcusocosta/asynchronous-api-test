
const assert = require('chai').assert;
const applyFields = require('../../../source/executions/services/apply-fields');

describe('Apply fields unit test', () => {
  it('Deve retornar o objeto modificado', () => {
    const obj = {
      event: 'done-batch-line',
      requestId: '{{requestId}}',
    };

    const requestResult = {
      requestId: '3223232323232',
    };

    const executions = applyFields(obj, requestResult);

    assert.equal(obj.event, executions.event);
    assert.equal(requestResult.requestId, executions.requestId);
  });
});
