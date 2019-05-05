
function limitFunctionCallCount(...args) {
  //@TODO
  console.log(args);
    var increment = (args) => {
      var sum = 0;
        for( var i =1; i<=args.length; i++){
          sum = sum + args[i];
        }
      console.log(sum);
      console.log(limitedFunction);
    }
    return increment;
}

// export {
//   limitFunctionCallCount,
// };
const foo = (x, y, z) => (x + y + z);
const limitedFunction = limitFunctionCallCount(foo, 2);
limitedFunction(5, 10, 15);