
function limitFunctionCallCount(callback,n) {
   return function(...args) {
     if (n < 1) {
       return null
     }
     n--;
     return callback(...args);
   }
}

export {
  limitFunctionCallCount,
};
