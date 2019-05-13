function isIterable(data) {
  if (data) {
    return typeof data[Symbol.iterator] === 'function';
  }
  return false;
}

export { isIterable };
