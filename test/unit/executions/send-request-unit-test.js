
const assert = require('chai').assert;
const nock = require('nock');
const sendRequest = require('../../../source/executions/services/send-request');

describe.only('', () => {
  it('', (done) => {
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
          parentReferrerCode: '020123456TALITA1'
        },
      },
    };


    nock('https://localhost:5066')
      .post('/experiences/casa-venda-os-novos-produtos/triggers')
      .reply(200, { results: [{ id: 'pgte' }] });

    sendRequest(request, done);
  });
});
