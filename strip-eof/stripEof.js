const CARRIAGE_RETURN_CHAR = '\r';
const NEW_LINE_CHAR = '\n';

function stripEof(string) {
  let chars;
  if (Buffer.isBuffer(string)) {
    chars = string.toString('utf8').split('');
  } else {
    chars = string.split('');
  }
  const lastElement = chars[chars.length - 1];
  const secondLastElement = chars[chars.length - 2];
  const hasEndOfLine = lastElement === CARRIAGE_RETURN_CHAR || lastElement === NEW_LINE_CHAR;
  const hasBothCharactersAtEnd = (secondLastElement === CARRIAGE_RETURN_CHAR
  && lastElement === NEW_LINE_CHAR);
  if (hasBothCharactersAtEnd) {
    chars.splice(chars.length - 2, 2, '');
    return chars.join('');
  }
  if (hasEndOfLine) {
    chars.splice(chars.length - 1, 1, '');
    return chars.join('');
  }
  return string;
}

export { stripEof };
