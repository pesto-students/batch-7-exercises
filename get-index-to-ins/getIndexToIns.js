
function getIndexToIns(arr,number) {
  arr.push(number);
  //Sort array in ascending order
  arr.sort((a,b) => a-b); 
  return arr.indexOf(number);
}

export {
  getIndexToIns,
};
