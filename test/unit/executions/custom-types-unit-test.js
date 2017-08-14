
const assert = require('chai').assert;
const customTypes = require('../../../source/executions/services/custom-types');

describe('Custom types unit test', () => {
  it('Deve retornar os fields criados dinamicamente', () => {
    const customFields = [
      {
        name: 'mobile',
        type: 'mobile',
      },
      {
        name: 'amount',
        value: 1,
      },
    ];

    const fields = customTypes(customFields);
    assert.property(fields, 'mobile');
    assert.property(fields, 'amount');
    assert.equal(fields.amount, 1);
  });

  it('Deve retornar indefined quando der erro para gerar as variáveis', () => {
    const customFields = [
      {
        name: 'mobile',
        type: 'mobile1',
      },
      {
        name: 'amount',
        value: 1,
      },
    ];

    const fields = customTypes(customFields);
    assert.isUndefined(fields);
  });

  it('Deve retornar array vazio quando não existir campos para serem gerados', () => {
    const customFields = [];

    const fields = customTypes(customFields);
    assert.isObject(fields);
  });
});
