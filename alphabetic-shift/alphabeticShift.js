const SHIFT_BY = 1;
function alphabeticShift(str) {
  let shiftedString = '';
  for (const char of str) {
    const asciiCode = char.charCodeAt();
    shiftedString += String.fromCharCode(asciiCode + SHIFT_BY);
  }
  return shiftedString;
}

export { alphabeticShift };
