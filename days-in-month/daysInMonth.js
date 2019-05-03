function daysInMonth(year, month) {
  const requiredMonth = new Date(year, month, 0);
  return requiredMonth.getDate();
}

export { daysInMonth };
