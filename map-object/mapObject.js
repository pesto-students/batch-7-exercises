function mapObject(obj, mappingFunction) {
  for (let key in obj) {
    obj[key] = mappingFunction(obj[key]);
  }
  return obj;
}

export { mapObject };
