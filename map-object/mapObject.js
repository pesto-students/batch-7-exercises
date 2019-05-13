function mapObject(object, callback) {
  for (var key in object) {
    object[key] = callback(object[key]);
  }
  return object;
}

export { mapObject };
