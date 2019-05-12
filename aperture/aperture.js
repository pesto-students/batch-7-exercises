
function aperture(noOfCharacters, array) {
  
  const slicedArray = [];
  const differenceValue = array.length - noOfCharacters;
  for (let i = 0; i <= differenceValue; i += 1) {
    const arr = array.slice(i, i + noOfCharacters);
    slicedArray.push(arr);
  }
  return slicedArray;
}


export {
  aperture,
};
