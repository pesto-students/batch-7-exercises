
function roundTo(value, digitsToRound) {
  return Number(parseFloat(value).toFixed(digitsToRound))
}
roundTo.up = function(value, digitsToRound) {
  return Number(parseFloat(value).toFixed(digitsToRound))
}
roundTo.down = function(value, digitsToRound) {
  return Number(parseFloat(value).toFixed(digitsToRound))
}

export {
  roundTo,
};
