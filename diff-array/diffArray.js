
function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.map(function(val){
   arr2.indexOf(val) < 0 ? newArr.push(val) : '';
  });

  arr2.map(function(val){
   arr1.indexOf(val) < 0 ? newArr.push(val) : '';
  });

  return newArr;
  
}

export {
  diffArray,
};
