
function largeOfFour(args) {
  debugger
  let maxArray = [];
  args.forEach(function(el){  
      maxArray.push(Math.max(...el));  
  })
  return maxArray;
}

export {
  largeOfFour,
};
