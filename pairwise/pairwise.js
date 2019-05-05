
function pairwise(arr, value) {
  var sum = 0;
  for( var i = 0; i < arr.length; i++) {
    //var sum = 0;
    for( var j = 0; j < arr.length; j++) {
      if( i !== j) {
        if(arr[i] + arr[j] === value) {
          sum = sum + i + j;
        }
      } 
    }
    //totalSum += sum;
  }
  return (sum);
}

export {
  pairwise,
};
