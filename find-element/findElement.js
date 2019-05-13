
function findElement(...args) {
  
  var arr = args[0];
  var f = 0;
  for( var i = 0; i< args[0].length; i++){
    var a = args[1](arr[i]);
    if( a === true){
      return arr[i];
      f=1;
    }
    }
    if( f === 0)
    return undefined;
}

export {
  findElement,
};
// findElement([1, 3, 5, 8, 9, 10], (num) => {
//   return num % 2 === 0 });