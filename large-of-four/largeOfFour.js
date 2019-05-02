
function largeOfFour(...args) {
  var arr1 = args[0][0];
  var arr2 = args[0][1];
  var arr3 = args[0][2];
  var arr4 = args[0][3];
  //console.log(arr2);
  var finalArray = [findMax(arr1), findMax(arr2), findMax(arr3), findMax(arr4)];
  return finalArray;
}
function findMax(a){
  //console.log(a);
  var max = a[0];
  for( var i = 0; i < a.length ; i++){
    if(a[i] > max){
      max = a[i];
    }
  }
  return max;
}

export {
  largeOfFour,
};
// largeOfFour([
//   [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1],
// ]);
