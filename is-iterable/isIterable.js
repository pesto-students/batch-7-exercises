
function isIterable(inputToCheck) {
   //if an object has symbol.iterator function then it is iterable
     return typeof inputToCheck[Symbol.iterator] === 'function'
  
}

export {
  isIterable,
};
