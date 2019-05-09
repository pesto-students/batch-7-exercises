
function longestWordInString(args) {
  debugger
  let stringArray =  args.split(" ");
  let largestWord = stringArray.reduce((accumulator, currentValue) => {
      if(accumulator.length < currentValue.length){
        accumulator = currentValue;
      }
      return accumulator;
  })
  return largestWord.length;
}

export {
  longestWordInString,
};
