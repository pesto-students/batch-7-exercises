
function repeatStringNumTimes(...args) {
  var str = args[0];
  var number = args[1];
  // To store the n no of times repeated string
  var finalString = str;
    if(number < 0 ){
      return '';
    }
    else{
      for( var i = 1; i < number; i++){
        finalString = finalString + str;
      }
      return finalString;
    }
}

export {
  repeatStringNumTimes,
};
