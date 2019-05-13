function truthCheck(array, thruthy) {
  for (var i = 0; i < array.length; i++) {
    var object = array[i];
    if (!object[thruthy]) {
      return false;
    }
  }
  return true;
}

export { truthCheck };
