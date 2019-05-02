
function limitFunctionCallCount(...args) {
  //@TODO
  
    var increment = (...args) => {
      var sum = 0;
        for( var i =1; i<=args.length; i++){
          sum = sum + args[i];
        }
      return sum;
    }
    return increment;
}

export {
  limitFunctionCallCount,
};
