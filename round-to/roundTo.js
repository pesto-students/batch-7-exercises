function roundTo(num, roundUpto) {
  debugger;
  let result = 0;
  let catalyst = Math.pow(10, roundUpto - 1);
  if (roundUpto > 0) {
    result = (num * catalyst) / catalyst;
    return parseFloat(result.toFixed(roundUpto));
  }
}

export { roundTo };
