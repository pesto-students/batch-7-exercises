function slice(start, end, data) {
  // array.slice(startIndex, maxIndex, array);
  let startIndex = start;
  let maxIndex = end;
  if (Array.isArray(data)) {
    const sliceArray = [];
    if (startIndex >= maxIndex) {
      return [];
    }
    for (let i = startIndex; i < maxIndex; i += 1) {
      sliceArray.push(data[i]);
    }
    return sliceArray;
  }
  if (typeof data === 'string') {
    let sliceString = '';
    if (startIndex < 0) {
      startIndex = data.length + startIndex;
    }
    if (maxIndex < 0) {
      maxIndex = data.length + maxIndex;
    }
    if (startIndex >= maxIndex) {
      return '';
    }
    for (let i = startIndex; i < maxIndex && i < data.length; i += 1) {
      sliceString += data[i];
    }
    return sliceString;
  }
  throw new TypeError(`Only accept array and string datatype, got ${typeof data}`);
}

export { slice };
