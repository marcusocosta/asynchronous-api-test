const conf = require('../source/commons/conf');
const db = require('../source/commons/db');

before((done) => {
  db.connect(conf.get('MONGO_URL_TEST'), done);
});

after((done) => {
  db.getCollection('tests').remove({}, () => {
    db.close(done);
  });
});
