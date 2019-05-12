
function isIterableEmpty(object) {
  return object[Symbol.iterator]().next().done;
}

export {
  isIterableEmpty,
};
