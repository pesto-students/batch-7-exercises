function updateInventory(currentInventory, newInventory) {
  if (currentInventory && !newInventory) {
    array2D.sort(function(firstArr, secondArr) {
      return firstArr[1] - secondArr[1];
    });
    return array2D;
  }
  var updatedInventory = [];
  var unMatchedRecords = newInventory.filter(function(array) {
    return indexOf2DArray(currentInventory, array[1], 1) === -1 ? true : false;
  });
  currentInventory.map(function(array) {
    var index = indexOf2DArray(newInventory, array[1], 1);
    if (index !== -1) {
      updatedInventory.push([array[0] + newInventory[index][0], array[1]]);
    } else {
      updatedInventory.push(array);
    }
  });
  updatedInventory = updatedInventory.concat(unMatchedRecords);
  updatedInventory.sort(function(firstArr, secondArr) {
    if (firstArr[1] < secondArr[1]) {
      return -1;
    }
    if (firstArr[1] > secondArr[1]) {
      return 1;
    }
    return 0;
  });
  return updatedInventory;
}

function indexOf2DArray(array2D, searchValue, valueIndex) {
  for (var i = 0; i < array2D.length; i++) {
    if (searchValue === array2D[i][valueIndex]) {
      return i;
    }
  }
  return -1;
}
export { updateInventory };
