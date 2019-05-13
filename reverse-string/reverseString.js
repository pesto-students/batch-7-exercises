function reverseString(str) {
  const charArr = str.split('');
  const reversedCharArr = [];
  charArr.forEach((char) => {
    reversedCharArr.unshift(char);
  });
  return reversedCharArr.join('');
}

export { reverseString };
