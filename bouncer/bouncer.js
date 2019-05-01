
function bouncer(array) {
  var falsyValueArray = [false, null, 0, undefined, ''];
  falsyValueArray.forEach(falseValue => {
    while(array.length > 0) {
      var index = array.indexOf(falseValue);
      if(index==-1)
        break;
        array.splice(index,1);
    }
  });
  //  Remove NaN from array
  for (var i = 0; i < array.length; i++) {
      if(Number.isNaN(array[i])) {
        array.splice(i,1);
      }
  }
  return array;
}

export {
  bouncer,
};
