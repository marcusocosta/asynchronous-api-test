process.title = 'asynchronous-api-test';
const app = require('./source/application');
const logger = require('./source/commons/logger');
const conf = require('./source/commons/conf');
const db = require('./source/commons/db');
const execution = require('./source/executions');

const appPort = conf.get('APP_PORT');

const shutdown = () => {
  logger.warn('Server receive signal to shutdown.');
  process.exit(0);
};

execution.init();

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (er) => {
    logger.error(er.message);
    throw er;
  })
  .on('exit', (code) => {
    logger.info('Node process exit with code:', code);
    db.close();
  });

db.connect(conf.get('DB_URL'), (dbErr) => {
  if (dbErr) {
    logger.error('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(process.env.PORT || appPort, (err) => {
      if (err) {
        logger.error('Error on listen port ', appPort);
      } else {
        logger.info('Server listening on port ', appPort);
      }
    });
  }
});
