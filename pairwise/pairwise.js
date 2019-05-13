function pairwise(numericArray, sum) {
  var hashmap = {};
  var indexArrayOfSum = [];
  var sumOfIndices = 0;
  for (var i = 0; i < numericArray.length; i++) {
    var number = numericArray[i];
    if (!hashmap[number]) {
      hashmap[number] = [i];
    } else {
      hashmap[number].push(i);
    }
  }
  for (var i = 0; i < numericArray.length; i++) {
    var number = numericArray[i];
    var difference = sum - number;
    if (hashmap[number]) {
      var firstIndex = hashmap[number][0];
      hashmap[number].shift();
      if (hashmap[difference] && hashmap[difference].length) {
        indexArrayOfSum.push([firstIndex, hashmap[difference][0]]);
        hashmap[difference].shift();
      }
    }
  }
  indexArrayOfSum.forEach(indicesArray => {
    sumOfIndices = sumOfIndices + indicesArray[0] + indicesArray[1];
  });
  return sumOfIndices;
}

export { pairwise };
