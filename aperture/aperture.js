
function aperture(lengthOfSubArray, array) {
  if (lengthOfSubArray > array.length) {
    return [];
  }
  const arrayOfSubArray = [];
  const exitCondition = array.length - lengthOfSubArray;
  for (let i = 0; i <= exitCondition; i += 1) {
    const subArray = array.slice(i, i + lengthOfSubArray);
    arrayOfSubArray.push(subArray);
  }
  return arrayOfSubArray;
}

export {
  aperture,
};
