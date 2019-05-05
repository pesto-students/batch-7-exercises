
function repeatStringNumTimes(str, number) {
  // To store the string which is repeated n number of times as specified
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
