
function daysInMonth(year, month) {

  var daysInMonth = {
    '1' :31,
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
  var isLeapYear = (year % 4 === 0) && (year % 100 !=0);
  if (isLeapYear) {
    if (month == 2) {
      return 29
    } else {
      return 28
    }
  } else {
    return daysInMonth[month];
  }
}

export {
  daysInMonth,
};
