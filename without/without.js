
function without(arrayOne,arrayTwo) {
  let mergeArray =  arrayOne.concat(arrayTwo).flat(1);
  let missingElements =  mergeArray.filter((el)=> !arrayOne.flat().includes(el));
  return missingElements;
}

export {
  without,
};
