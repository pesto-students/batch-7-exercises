function objectPairs(object) {
  const output = [];
  let index = 0;
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      output[index] = [key, value];
      index += 1;
    }
  }
  return output;
}

export { objectPairs };
