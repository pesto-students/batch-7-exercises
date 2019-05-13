function rot13(codedStr) {
  const charArr = codedStr.split('');
  const pattern = /[A-Z]/;
  const decodedCharArr = charArr.map((char) => {
    if (char.match(pattern)) {
      let ascii = char.charCodeAt() - 13;
      if (ascii < 'A'.charCodeAt()) {
        ascii += 26;
      }
      return String.fromCharCode(ascii);
    }
    return char;
  });
  return decodedCharArr.join('');
}

export { rot13 };
