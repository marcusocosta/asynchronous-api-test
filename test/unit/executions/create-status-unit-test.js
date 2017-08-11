
const assert = require('chai').assert;
const createStatus = require('../../../source/executions/services/create-status');

describe('Create status unit test', () => {
  it('Quando não for passado um status antigo deve retornar um objeto de status', () => {
    const status = createStatus('created', null);
    assert.equal(status.lastStatus, 'created');
    assert.isNotNull(status.date);
    assert.isArray(status.trace);
  });

  it('Deve retornar um status com 1 trace', () => {
    const status = {
      lastStatus: 'created',
      date: '2017-08-11T21:20:44.758Z',
      trace: [],
    };
    const newStatus = createStatus('execution', status);
    assert.equal(newStatus.lastStatus, 'execution');
    assert.isNotNull(newStatus.date);
    assert.isArray(newStatus.trace);
    assert.equal(newStatus.trace.length, 1);
  });

  it('Deve retornar um status com 2 trace', () => {
    const status = {
      lastStatus: 'execution',
      date: '2017-08-11T21:20:44.758Z',
      trace: [{ status: 'created', date: '2017-08-11T21:20:44.758Z' }],
    };
    const newStatus = createStatus('finish', status);
    assert.equal(newStatus.lastStatus, 'finish');
    assert.isNotNull(newStatus.date);
    assert.isArray(newStatus.trace);
    assert.equal(newStatus.trace.length, 2);
  });
});
