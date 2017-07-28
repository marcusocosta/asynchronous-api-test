

const uuidv4 = require('uuid/v4');
const models = require('../execution-models');

module.exports = (test, callback) => {
  let obj = test;
  obj.testCode = test.code;
  obj.code = uuidv4();

  models.insertExecution(obj, callback);
};


  // var text = 'at 08:00pm';
  // var s = later.parse.text(text);

  // const o = later.schedule(s).prev(5);

  // console.log(o);