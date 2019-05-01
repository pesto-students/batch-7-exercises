
function sumAll(...args) {
    var startIndex = args[0][0];
    var endIndex = args[0][1];
    //var i;
    var sum = 0;
    var temp;
      //Swap indexes if startIndex is greater than endIndex
      if( startIndex > endIndex ){
        temp = startIndex;
        startIndex = endIndex;
        endIndex = temp;
      }
        for(var i = startIndex; i <= endIndex; i++ ){
          sum = sum + i;
        }
      return sum;
}

export {
  sumAll,
};
