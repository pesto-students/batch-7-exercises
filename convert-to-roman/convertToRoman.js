function convertToRoman(num) {
  const romanTable = {
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
  let romanNum = '';
  // eslint-disable-next-line guard-for-in
  for (const key in romanTable) {
    const repeatBy = Math.floor(num / romanTable[key]);
    num -= repeatBy * romanTable[key];
    romanNum += key.repeat(repeatBy);
  }
  return romanNum;
}

export { convertToRoman };
