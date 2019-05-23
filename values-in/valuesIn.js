function valuesIn(object) {
  const objectValues = [];
  for (const key in object) {
    objectValues.push(object[key]);
  }
  return objectValues;
}

export { valuesIn };
