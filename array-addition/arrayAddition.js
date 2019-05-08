
function arrayAddition(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    throw new Error('Array is empty');
  }
  if ( array1 instanceof Array === false || array2 instanceof Array === false) {
    throw new Error('Cannot add something that is not an array');
  }
  const sumOfArrays = [];
  let sum = 0;
  for ( let i = 0; i < array1.length; i++) {
    sum = array1[i] + array2[i];
    sumOfArrays.push(sum);
  }
  if (sumOfArrays.length < array1.length) {
    for ( let i = sumOfArrays.length; i < array1.length; i++) {
      sumOfArrays[i] = array1[i];
    }
  }
  else if (sumOfArrays.length < array2.length) {
    for ( let i = sumOfArrays.length; i < array2.length; i++) {
      sumOfArrays[i] = array2[i];
    }
  }
  return sumOfArrays;
}

export {
  arrayAddition,
};
