
function alphabeticShift(alphabets) {
  let alphabetArray = alphabets.split('')
  const shiftedalphabetsArray = alphabetArray.map((alphabet)=> {
      return String.fromCharCode(alphabet.charCodeAt(0) + 1)
  })
   return shiftedalphabetsArray.join('')
}

export {
  alphabeticShift,
};
