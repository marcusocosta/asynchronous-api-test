
const assert = require('chai').assert;
const nock = require('nock');
const execution = require('../../../source/executions');

describe('Execution test functional test', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Caso a requisição retorne erro o processamento do teste deve falhar', (done) => {
    const test = {
      input: {
        request: {
          method: 'post',
          uri: 'https://localhost:5066/experiences/casa-venda-os-novos-produtos/triggers',
          headers: [
            {
              name: 'content-type',
              value: 'application/json',
            },
          ],
          authorization: 'bearer cr4ed04gty66ggvvvvvv',
          data: {
            event: 'bonus-redeemed',
            data: {
              amount: 1,
              mobile: '5531987456321',
              status: 'E',
              referrerCode: '020123456TALITA1',
              parentReferrerCode: '020123456TALITA1',
            },
          },
        },
      },
    };

    nock('https://localhost:5066')
      .post('/experiences/casa-venda-os-novos-produtos/triggers')
      .replyWithError('timeout');

    execution(test, (err, res) => {
      assert.isNotNull(err);
      assert.isNull(res);
      done();
    });
  });

  it('Caso a validação dos campos obrigatórios falhe deve retornar erro', (done) => {
    const test = {
      input: {
        request: {
          method: 'post',
          uri: 'https://localhost:5066/experiences/casa-venda-os-novos-produtos/triggers',
          headers: [
            {
              name: 'content-type',
              value: 'application/json',
            },
          ],
          authorization: 'bearer cr4ed04gty66ggvvvvvv',
          data: {
            event: 'bonus-redeemed',
            data: {
              amount: 1,
              mobile: '5531987456321',
              status: 'E',
              referrerCode: '020123456TALITA1',
              parentReferrerCode: '020123456TALITA1',
            },
          },
        },
        asserts: {
          hasProperties: [
            'data',
            'existe.sim',
          ],
        },
      },
    };

    nock('https://localhost:5066')
      .post('/experiences/casa-venda-os-novos-produtos/triggers')
      .reply(200, { triggerId: '3434343434343434' });

    execution(test, (err, res) => {
      assert.isNotNull(err);
      assert.isNull(res);
      done();
    });
  });
});
