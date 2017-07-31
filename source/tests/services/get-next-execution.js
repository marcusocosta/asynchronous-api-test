
const later = require('later');
const moment = require('moment');

module.exports = (when) => {
  const s = later.parse.text(when);
  const date = later.schedule(s).prev(1);
  if (date) {
    return date;
  } else {
    return moment().add(1, 'days').toDate();
  }
};