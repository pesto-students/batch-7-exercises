function repeatStringNumTimes(str, repeatBy) {
  let repeatedStr = '';
  if (repeatBy < 1) {
    return repeatedStr;
  }
  let count = 0;
  while (count < repeatBy) {
    repeatedStr += str;
    count += 1;
  }
  return repeatedStr;
}

export { repeatStringNumTimes };
