
function alternatingCharacters(input) {
  let output = [];
  input.forEach(string => {
    let stringArray = string.split('');
    let deletecount = stringArray.reduce((acc, alphabet, index) => {
      if ((index < stringArray.length - 1) && (alphabet == stringArray[index + 1])) {
          acc += 1;
        }
        return acc;
    },0);
    output.push(deletecount);
  });
  return output;
  
}

export {
  alternatingCharacters,
};
