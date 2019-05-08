const isNumber = num => typeof num === 'number';

function addArrays(array1, array2) {
  let index = 0;
  const summationArray = array1.map((el) => {
    const secondArrayEl = array2[index];
    if (!isNumber(el)) {
      throw new Error(`Expected numerical values. Received ${typeof el}.`);
    }
    if (!isNumber(secondArrayEl)) {
      throw new Error(`Expected numerical values. Received ${typeof secondArrayEl}.`);
    }
    index += 1;
    return el + secondArrayEl;
  });
  const extraElements = array2.slice(index);
  return summationArray.concat(extraElements);
}

function arrayAddition(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    throw new Error('Received empty array.');
  }
  if (array1.length <= array2.length) {
    return addArrays(array1, array2);
  }
  return addArrays(array2, array1);
}

export { arrayAddition };
