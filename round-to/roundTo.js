function roundTo(number, afterDecimal) {
  var isNumberNeg = number >= 0 ? false : true;
  if (isNumberNeg) {
    number = number * -1;
  }
  var roundValue = Math.round(
    parseFloat((number * Math.pow(10, afterDecimal)).toFixed(1))
  );
  var roundedResult = roundValue * Math.pow(10, -1 * afterDecimal);
  if (isNumberNeg) {
    roundedResult = roundedResult * -1;
  }
  return roundedResult;
}

roundTo.up = function(number, afterDecimal) {
  var roundValue = Math.ceil(number * Math.pow(10, afterDecimal));
  return roundValue * Math.pow(10, -1 * afterDecimal);
};
roundTo.down = function(number, afterDecimal) {
  var roundValue = Math.floor(
    parseFloat((number * Math.pow(10, afterDecimal)).toFixed(1))
  );
  if (afterDecimal >= 0) {
    return parseFloat(
      (roundValue * Math.pow(10, -1 * afterDecimal)).toFixed(afterDecimal)
    );
  } else {
    return roundValue * Math.pow(10, -1 * afterDecimal);
  }
};
export { roundTo };
