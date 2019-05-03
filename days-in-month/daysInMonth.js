import { isLeapYear } from "date-fns";

function daysInMonth(...arr) {
  var year = arr[0];
  var month = arr[1];
  var leapYearMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  var normalYearMonthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    if(isLeapYear(year)){
      return leapYearMonthDays[month-1];
    }
    else{
      return normalYearMonthDays[month-1];
    }
  
}

export {
  daysInMonth,
};
//daysInMonth(2014, 4);