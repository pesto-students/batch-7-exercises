
function negativeIndex(array) {
  if (array.constructor !== Array) {
    return new TypeError('Only arrays are supported')
  }
  const handler =  {
    get: (array, index) => {
      if (index >= 0 ) {
        return array[index];
      } else {
        return array[array.length + index];  //  -(-index) is equeal +index
      }
    }
  }
  return new Proxy(array, handler);
}
  

export {
  negativeIndex,
};
