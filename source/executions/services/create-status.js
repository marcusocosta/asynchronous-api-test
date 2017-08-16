module.exports = (newStatus, message, objStatus) => {
  let status = {};
  if (!objStatus) {
    status = {
      lastStatus: newStatus,
      message,
      date: new Date(),
      trace: [],
    };
  } else {
    status = {
      lastStatus: newStatus,
      date: new Date(),
      message,
      trace: objStatus.trace,
    };
    status.trace.push({
      status: objStatus.lastStatus,
      date: objStatus.date,
      message: objStatus.message,
    });
  }
  return status;
};
