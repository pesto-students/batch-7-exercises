
function rotatedString(str1, str2) {
  str2 = str2.split('').reverse().join('');
  console.log(str1);
  console.log(str2);
  return (str1 === str2);
}

export {
  rotatedString,
};
