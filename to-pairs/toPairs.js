function toPairs(obj) {
  const keyValueArr = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keyValueArr.push([key, obj[key]]);
    }
  }
  return keyValueArr;
}

export { toPairs };
