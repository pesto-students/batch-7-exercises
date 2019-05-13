function diffArray(array1, array2) {
  var differenceArray = [];
  var hashmapOfArray1 = [];
  var hashmapOfArray2 = [];
  array1.forEach(element => {
    if (!hashmapOfArray1[element]) {
      hashmapOfArray1[element] = 1;
    }
  });
  array2.forEach(element => {
    if (!hashmapOfArray2[element]) {
      hashmapOfArray2[element] = 1;
    }
  });
  for (var index in array1) {
    var element = array1[index];
    if (hashmapOfArray2[element]) {
      hashmapOfArray1[element] = 0;
      hashmapOfArray2[element] = 0;
    } else {
      differenceArray.push(element);
    }
  }

  for (var key in hashmapOfArray2) {
    if (hashmapOfArray2[key] == 1) {
      var value = isNaN(key) ? key : parseInt(key);
      differenceArray.push(value);
    }
  }

  return differenceArray;
}

export { diffArray };
