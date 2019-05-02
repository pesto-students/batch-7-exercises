
function objectInvert(object) {
  let invertedObject = {};
  for (let key in object) {
    invertedObject[object[key]] = key;
  }
  return invertedObject;
}

export {
  objectInvert,
};
