
function isIterableEmpty(args) {
  const iterator = args[Symbol.iterator]();
  return iterator.next().done;
}

export {
  isIterableEmpty,
};
