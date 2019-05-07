function alphabeticShift(string) {
  const SHIFT_BY_CHARACTERS = 1;
  const formatCharacter = char =>
    String.fromCharCode(char.charCodeAt() + SHIFT_BY_CHARACTERS);
  const shiftedString = string
    .split('')
    .map(formatCharacter)
    .join('');
  return shiftedString;
}

export { alphabeticShift };
