
function daysInMonth(year, month) {

  let daysInMonth = {
    '1' :31,
    '2' : 28,
    '3' : 31,
    '4' :30,
    '5' : 31,
    '6' : 30,
    '7' :31,
    '8':31,
    '9' :30,
    '10' : 31,
    '11' : 30,
    '12' : 31
  }
  let isLeapYear = (year % 4 === 0) && (year % 100 != 0);
  if (isLeapYear && month == 2) {
    return 29;
  }
    return daysInMonth[month];
}

export {
  daysInMonth,
};
