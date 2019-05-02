function findElement(numericArray, callback) {
  for (var i = 0; i < numericArray.length; i++) {
    var element = numericArray[i];
    if (callback(element)) {
      return element;
    }
  }
}

export { findElement };
