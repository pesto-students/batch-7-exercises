
function objectInvert(obj) {
  let invertedObject = {};
  Object.keys(obj).forEach ((key) => {
    let property = obj[key];
    invertedObject[property] = key;
  });
  return invertedObject;
}

export {
  objectInvert,
};

