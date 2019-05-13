function daysInMonth(year, monthNumber) {
  return new Date(year, monthNumber, 0).getDate();
}

export { daysInMonth };
