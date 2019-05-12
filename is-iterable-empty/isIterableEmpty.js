
function isIterableEmpty(args) {
  for(let key of args) {
    return false
  }
  return true
}

export {
  isIterableEmpty,
};
