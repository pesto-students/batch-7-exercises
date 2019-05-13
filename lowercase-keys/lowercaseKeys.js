function lowercaseKeys(object) {
  const lowercaseKeysObject = {};
  for (const key in object) {
    lowercaseKeysObject[`${key.toLowerCase()}`] = object[key];
  }
  return lowercaseKeysObject;
}

export { lowercaseKeys };
