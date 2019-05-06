function convertToRoman(num) {
  const fixedRomanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let numberInEnglish = num;
  let numberInRoman = '';
  for (const i of Object.keys(fixedRomanSymbols)) {
    const q = Math.floor(numberInEnglish / fixedRomanSymbols[i]);
    numberInEnglish -= q * fixedRomanSymbols[i];
    numberInRoman += i.repeat(q);
  }
  return numberInRoman;
}

export { convertToRoman };
