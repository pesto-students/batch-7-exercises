const timeNow = () => {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();
  const ms = today.getMilliseconds();
  return `${h}h:${m}m:${s}s:${ms}ms`;
};

module.exports = {
  timeNow,
};
