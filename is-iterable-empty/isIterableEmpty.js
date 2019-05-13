function isIterableEmpty(data) {
  const iterator = data[Symbol.iterator]();
  return iterator.next().done;
}

export { isIterableEmpty };
