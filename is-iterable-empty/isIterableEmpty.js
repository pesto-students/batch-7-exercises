
function isIterableEmpty(arg) {
  for (const key of arg) {
    return false;
  }
  return true;
}

export {
  isIterableEmpty,
};
