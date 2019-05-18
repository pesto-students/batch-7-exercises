
function reject(predicateFunction, array) {
  return array.filter((element) => !predicateFunction(element));
}

export {
  reject,
};
