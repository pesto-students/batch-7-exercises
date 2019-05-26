function omit(omitKeys, object) {
  const omitKeysMap = new Map();
  omitKeys.map((key) => {
    omitKeysMap.set(key, true);
    return key;
  });
  const newObject = {};
  for (const key in object) {
    if (!omitKeysMap.has(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

export { omit };
