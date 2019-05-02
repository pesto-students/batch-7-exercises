function mapObject(inputObj, mapFn) {
  const outputObj = {};
  Object.keys(inputObj).forEach((element) => {
    const newValue = mapFn(inputObj[element]);
    outputObj[element] = newValue;
  });
  return outputObj;
}

export { mapObject };
