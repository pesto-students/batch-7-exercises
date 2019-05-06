
function truthCheck(input, predicate) {
  debugger;
  input.forEach(object => {
    if (!(object.hasOwnProperty(predicate) && Boolean(object[predicate]))) {
      return false;
    }
  });
  return true;
}

export {
  truthCheck,
};
