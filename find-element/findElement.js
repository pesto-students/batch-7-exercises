
function findElement(inputArray,truthTest) {
  for (let i =0; i< inputArray.length ; i ++) {
    if (truthTest (inputArray[i])) {
      return inputArray[i];
    }
  }
}

export {
  findElement,
};
