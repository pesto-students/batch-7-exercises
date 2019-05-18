
function deepCopyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

export {
  deepCopyObject,
};
