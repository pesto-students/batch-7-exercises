const MILLISECONDS_IN_A_SECOND = 1000;
const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;

function millisecondsInADay() {
  return MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR * HOURS_IN_A_DAY;
}

function daysInMonth(year, month) {
  const startOfTheMonth = new Date(year, month - 1, 1);
  const startOfTheNextMonth = new Date(year, month % 12, 1);
  return (startOfTheNextMonth - startOfTheMonth) / millisecondsInADay();
}

export { daysInMonth };
