
function rot13(str) {
  let arr = str.split('');
  let result = '';
  arr.forEach(char => {
    if(punctuation.includes(char)){
      result += char;
    } else {
      let code = char.charCodeAt(0);
      console.log('code is: ', code, String.fromCharCode(code))
      code -= 13;
        if(code < 65) {
          code = 90 - (65-code-1);
        }
      console.log('code rotated is: ', code, String.fromCharCode(code));
      result += String.fromCharCode(code);
    }
  });
  
  return result;
  
}

export {
  rot13,
};
