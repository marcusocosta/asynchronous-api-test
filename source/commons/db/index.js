const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null,
};

const connect = (url, done) => {
  if (state.db) {
    done();
  } else {
    MongoClient.connect(url, (err, db) => {
      if (!err) {
        state.db = db;
      }
      done(err);
    });
  }
};

const getCollection = collectionName => state.db.collection(collectionName);

const close = (done) => {
  if (state.db) {
    state.db.close((err) => {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};

module.exports = {
  connect,
  getCollection,
  close,
};
