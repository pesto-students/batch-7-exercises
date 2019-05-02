function objectKeys(object) {
  const Keys = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      Keys.push(key);
    }
  }
  return Keys;
}

export { objectKeys };
