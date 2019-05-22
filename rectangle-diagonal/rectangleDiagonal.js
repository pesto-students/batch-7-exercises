function rectangleDiagonal(height, width) {
  // The exponentiation operator (**), check out link:
  // [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**) ]
  return Math.sqrt((height ** 2) + (width ** 2));
}

export { rectangleDiagonal };
