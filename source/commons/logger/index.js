
const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
    }),
    new (winston.transports.File)({
      name: 'info-file',
      filename: './log/filelog-info.log',
      level: 'info',
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: './log/filelog-error.log',
      level: 'error',
    }),
  ],
});

module.exports = logger;
