
function truthCheck(array, key) {
  return array.every(el => el[key]);
}

export {
  truthCheck,
};
