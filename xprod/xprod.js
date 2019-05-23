function xprod(array1, array2) {
  if (array1.length === 0 || array1.length === 0) {
    return [];
  }
  const combinationOfArray = [];
  array1.map((ele) => {
    array2.map((eleOfarr2) => {
      combinationOfArray.push([ele, eleOfarr2]);
      return eleOfarr2;
    });
    return ele;
  });
  return combinationOfArray;
}

export { xprod };
