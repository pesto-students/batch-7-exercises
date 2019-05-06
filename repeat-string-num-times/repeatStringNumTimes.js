function repeatStringNumTimes(string, repeatTimes) {
  if (repeatTimes <= 0) return '';

  let repreatedString = '';
  for (let i = 0; i < repeatTimes; i += 1) {
    repreatedString += string;
  }
  return repreatedString;
}

export { repeatStringNumTimes };
