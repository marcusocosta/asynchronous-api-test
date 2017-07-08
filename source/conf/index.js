const ROOT_PATH = process.cwd();
const nconf = require('nconf');

nconf.argv()
  .env()
  .file({ file: `${ROOT_PATH}/config/authorization-api.json` });

module.exports = nconf;
