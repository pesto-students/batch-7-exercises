function argsString(str, params) {
  let modifiedString = '';
  let paramIndex = 0;
  for (let char of str) {
    if (char === '{') {
      char = params[paramIndex];
      paramIndex += 1;
    } else if (char === '}') {
      char = '';
    }
    modifiedString += char;
  }
  return modifiedString;
}

export { argsString };
