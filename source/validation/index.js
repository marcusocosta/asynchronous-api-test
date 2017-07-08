
const tv4 = require('tv4');
const testSchema = require('../tests/test-schema');

tv4.addSchema(testSchema);

const validate = (schema, req, res, next) => {
  const result = tv4.validateMultiple(req.body, schema);
  if (!result.valid) {
    res.status(400).json({ message: 'Formato de requisição inválido!' });
  } else {
    next();
  }
};

const test = (req, res, next) => {
  validate('testSchema', req, res, next);
};

module.exports = {
  test,
};
