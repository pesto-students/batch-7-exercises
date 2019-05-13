const isTimeInNegative = timeInMs => timeInMs < 0;

function parseMs(timeInMs) {
  const FIRST_DAY_DATE = 1;

  const date = isTimeInNegative(timeInMs)
    ? new Date(0)
    : new Date(timeInMs);
  const monthPassed = date.getUTCMonth();
  const daysPassed = date.getUTCDate() - FIRST_DAY_DATE + monthPassed;

  return {
    days: daysPassed,
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    milliseconds: date.getUTCMilliseconds(),
  };
}

export { parseMs };

parseMs(1400);
