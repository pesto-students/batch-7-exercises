
function alphabeticShift(alphabets) {
  let alphabetArray = alphabets.split('')
  const shiftedalphabetsArray = alphabetArray.map((alphabet)=> {
      String.fromCharCode(alphabet.charCodeAt(0) + 1)
  })
  return shiftedalphabetsArray.toString()
}

export {
  alphabeticShift,
};
