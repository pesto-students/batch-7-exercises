function removeCommonElem(array1, array2) {
  return array1.filter(value => !array2.includes(value));
}

function diffArray(array1, array2) {
  const tempArray = array1;
  const uniqueArr1 = removeCommonElem(array1, array2);
  const uniqueArr2 = removeCommonElem(array2, tempArray);
  return uniqueArr1.concat(uniqueArr2);
}

export { diffArray };
