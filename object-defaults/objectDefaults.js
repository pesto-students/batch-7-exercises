
function objectDefaults(obj,defaultObj) {
  const mergeObjects = Object.assign({},defaultObj,obj);
  return mergeObjects;
}

export {
  objectDefaults,
};
