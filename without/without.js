
function without(valuesToBeDeleted, array) {
  let set = new Set(valuesToBeDeleted);
  array = array.filter ((el) => {
     if (!set.has(el)) {
       return el;
     }
  });
  return array;
}

export {
  without,
};
