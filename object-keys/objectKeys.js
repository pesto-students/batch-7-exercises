
function objectKeys(object) {
  let keysArray = [];
  for (let key in object) {
    keysArray.push(key);
  }
  return keysArray;
}

export {
  objectKeys,
};
