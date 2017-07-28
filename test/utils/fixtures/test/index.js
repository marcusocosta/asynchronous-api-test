
const Chance = require('chance');

const chance = new Chance();

module.exports = (data) => {
  const obj = data || {};
  const test = {
    description: obj.description || chance.paragraph({ sentences: 1 }),
    filters: obj.filters || {},
    execution: obj.execution || 'at 08:00 pm',
    input: {
      method: obj.method || 'post',
      url: obj.url || chance.url(),
      headers: obj.headers || [],
      authorization: obj.authorization,
      body: obj.body || {},
    },
  };

  return test;
};
