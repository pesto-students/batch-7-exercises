
function getIndexToIns(arr,value) {
  arr.push(value);
  //Sorts the array i ascending order
  arr = arr.sort((a,b)=> {
    return (a-b);
  });
  
  return (arr.indexOf(value));
}

export {
  getIndexToIns,
};
//getIndexToIns([3, 10, 5], 3);