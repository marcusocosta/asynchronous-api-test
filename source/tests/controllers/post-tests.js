
var later = require('later');
const services = require('../services');

module.exports = (req, res) => {

  services.createTest(req.body, (err, resCreate) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

};

  // var text = 'at 08:00pm';
  // var s = later.parse.text(text);

  // const o = later.schedule(s).prev(5);

  // console.log(o);