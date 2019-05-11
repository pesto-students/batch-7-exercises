function rotatedString(stringOne, stringTwo) {
  // If same string or two different string given
  if (stringOne === stringTwo || stringOne.length !== stringTwo.length) {
    return false;
  }

  const { length } = stringOne;

  let StringOneCopy = stringOne;
  for (let i = 0; i < length; i += 1) {
    const firstChar = StringOneCopy.substr(0, 1);
    const remaining = StringOneCopy.substring(1);
    StringOneCopy = remaining + firstChar;
    if (StringOneCopy === stringTwo) return true;
  }
  return false;
}

export { rotatedString };
