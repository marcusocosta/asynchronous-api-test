
const assert = require('chai').assert;
const createExecutions = require('../../../source/executions/services/create-executions');

describe('Execution asserts unit test', () => {
  it('Deve retornar erro quando a propriedade não existir no objeto no  caminho correto', () => {
    const test = {
      expected: [
        {
          identifyFields: {
            event: 'done-batch-line',
            requestId: '{{requestId}}',
          },
          asserts: {
            hasProperties: [
              'data.fowordedValue',
              'data.delivered.value',
              'data.data.dataMovto',
            ],
            hasValues: [
              {
                property: 'data.data.dataMovto',
                value: '{{input.body.data.dataMovto}}',
              },
              {
                property: 'data.fowordedValueo',
                value: 1,
              },
            ],
          },
        },
        {
          identifyFields: {
            event: 'done-request',
            requestId: '{{requestId}}',
          },
          asserts: {
            hasProperties: [
              'data.fowordedValue',
              'data.delivered.value',
              'data.data.dataMovto',
            ],
            hasValues: [
              {
                property: 'data.data.dataMovto',
                value: '{{input.body.data.dataMovto}}',
              },
              {
                property: 'data.fowordedValueo',
                value: 1,
              },
            ],
          },
        },
      ],
    };

    const requestResult = {
      requestId: '3223232323232',
    };

    const executions = createExecutions(test, requestResult);
    assert.isNotNull(executions);
    assert.equal(executions.length, 2);
  });
});
