function isSubsetHasSum({ target, array, i }) {
  if (target === 0) {
    return true;
  }
  if (i <= 0) {
    return false;
  }
  if (array[i - 1] > target) {
    return isSubsetHasSum({ target, array, i: i - 1 });
  }
  return (
    isSubsetHasSum({ target, array, i: i - 1 })
    || isSubsetHasSum({ target: target - array[i - 1], array, i: i - 1 })
  );
}

function summable({ target, array }) {
  return isSubsetHasSum({ target, array, i: array.length });
}

export { summable };
