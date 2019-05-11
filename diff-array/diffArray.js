function diffArray(array1, array2) {
  const onlyArray1Contains = array1.filter(element => !array2.includes(element));
  const onlyArray2Contains = array2.filter(element => !array1.includes(element));
  return [...onlyArray1Contains, ...onlyArray2Contains];
}

export { diffArray };
