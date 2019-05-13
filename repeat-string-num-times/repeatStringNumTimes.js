function repeatStringNumTimes(string, numOfTime) {
  if (isNaN(numOfTime) || numOfTime < 0) {
    return "";
  }
  var repeatString = "";
  for (var i = 0; i < numOfTime; i++) {
    repeatString = repeatString + string;
  }
  return repeatString;
}

export { repeatStringNumTimes };
