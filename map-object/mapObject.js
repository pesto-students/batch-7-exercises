
function mapObject(object , mappingFunction) {
  for (let key in object) {
    object[key] = mappingFunction(object[key]);
  }
  return object;
}

export {
  mapObject,
};
