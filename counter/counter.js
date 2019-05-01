
function counter() {
  let count = 0;
  return function() {
    return count += 1;
  }
}

export {
  counter,
};
