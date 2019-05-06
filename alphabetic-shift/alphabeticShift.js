
function alphabeticShift(string) {
  let shiftedString = '';
  for (const char of string) {
    const isZAlphabet = char === 'z' || char === 'Z';
    if (isZAlphabet) {
      shiftedString += (char === 'z' ? 'a' : 'A');
    } else {
      const asciiValue = char.charCodeAt(0);
      const shiftedChar = String.fromCharCode(asciiValue + 1);
      shiftedString += shiftedChar;
    }
  }
  return shiftedString;
}

export {
  alphabeticShift,
};
