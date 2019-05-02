
function dropElements(array,cb) {
  return array.filter((element)=> cb(element));
}

export {
  dropElements,
};
