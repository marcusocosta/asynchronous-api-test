
const assert = require('chai').assert;
const nock = require('nock');
const sendRequest = require('../../../source/executions/services/send-request');

describe('Send request unit test', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Deve retornar os campos retornados pela requisição', (done) => {
    const request = {
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
    };

    nock('https://localhost:5066')
      .post('/experiences/casa-venda-os-novos-produtos/triggers')
      .reply(200, { requestId: '11587425896654' });

    sendRequest(request, (err, res) => {
      assert.isNull(err);
      assert.isNotNull(res);
      assert.equal('11587425896654', res.requestId);
      done();
    });
  });

  it('Deve erro quando a requisição falhar', (done) => {
    const request = {
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
    };

    nock('https://localhost:5066')
      .post('/experiences/casa-venda-os-novos-produtos/triggers')
      .replyWithError('timeout');

    sendRequest(request, (err, res) => {
      assert.isNotNull(err);
      assert.isNull(res);
      done();
    });
  });
});
