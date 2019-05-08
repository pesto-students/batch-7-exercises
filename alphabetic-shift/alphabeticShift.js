
function alphabeticShift(string) {
  const SHIFT_BY_PLACE = 1;
  return string
    .split('')
    .map((char) => {
      const ascii = char.charCodeAt(0);
      const shiftedAscii = ascii + SHIFT_BY_PLACE;
      return String.fromCharCode(shiftedAscii);
    })
    .join('');
}

export {
  alphabeticShift,
};
