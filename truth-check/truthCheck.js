
function truthCheck(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    if (!object[predicate]) {
      return false;
    }
  }
  return true;
}

export {
  truthCheck,
};
