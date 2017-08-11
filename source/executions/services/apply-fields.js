const Handlebars = require('handlebars');

module.exports = (obj, variables) => {
  const input = JSON.stringify(obj);
  const template = Handlebars.compile(input);
  const result = template(variables);

  return JSON.parse(result);
};
