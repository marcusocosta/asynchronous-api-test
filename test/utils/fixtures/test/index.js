
const Chance = require('chance');

const chance = new Chance();

module.exports = (data) => {
  const obj = data || {};
  const test = {
    description: obj.description || chance.paragraph({ sentences: 1 }),
    filters: obj.filters || {},
    input: {
      request: {
        method: obj.method || 'post',
        url: obj.url || chance.url(),
        headers: obj.headers || [],
        authorization: obj.authorization,
        body: obj.body || {},
      },
      asserts: {
        hasProperties: ['teste', 'teste2'],
      },
    },
    expected: [{
      identifyFields: {
        name: obj.identifyFieldsName || chance.paragraph({ sentences: 1 }),
      },
      asserts: {
        hasProperties: ['teste', 'teste2'],
      },
    }],
  };

  return test;
};
