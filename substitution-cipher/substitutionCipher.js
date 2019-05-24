function encode(char) {
  let isUpper = false;
  const isCapitalLetter = char >= 'A' && char <= 'Z';
  const isSmallLetter = char >= 'a' && char <= 'z';
  if (!isCapitalLetter && !isSmallLetter) {
    return char;
  }
  if (isCapitalLetter) {
    isUpper = true;
  }
  const charCode = char.toLowerCase().charCodeAt();
  let encodeChar = 0;
  let encodedCharCode;
  if (charCode % 2 === 0) {
    encodedCharCode = (charCode + 6) % 123;
  } else {
    encodedCharCode = (charCode + 4) % 123;
  }
  encodeChar = String.fromCharCode(encodedCharCode < 97 ? encodedCharCode + 97 : encodedCharCode);
  return isUpper ? encodeChar.toUpperCase() : encodeChar;
}

function substitutionCipher(str) {
  let encodeStr = '';
  for (const char of str) {
    encodeStr += encode(char);
  }
  return encodeStr;
}

export { substitutionCipher };
