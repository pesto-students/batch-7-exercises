
function diffArray(array1,array2) {
  let tempArrayOne = array1.filter((el) => { 
    return !array2.includes(el);
  });
  let tempArrayTwo =  array2.filter((el) => {
    return !array1.includes(el);
  });
  let mergeDiffArray = tempArrayOne.concat(tempArrayTwo);
  return mergeDiffArray;
}

export {
  diffArray,
};
