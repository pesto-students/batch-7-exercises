
function chunkArrayInGroups(...args) {
  var arr = args.flat();
  var size = arr[arr.length-1];
  var temp = [];
  var finalArray = [];

  for (var a = 0; a < arr.length -1 ; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      finalArray.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    finalArray.push(temp);
  return finalArray;
}


 

export {
  chunkArrayInGroups,
};
//chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);