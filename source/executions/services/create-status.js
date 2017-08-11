module.exports = (newStatus, objStatus) => {
  let status = {};
  if (!objStatus) {
    status = {
      lastStatus: newStatus,
      date: new Date(),
      trace: [],
    };
  } else {
    status = {
      lastStatus: newStatus,
      date: new Date(),
      trace: objStatus.trace,
    };
    status.trace.push({ status: objStatus.lastStatus, date: objStatus.date });
  }
  return status;
};
