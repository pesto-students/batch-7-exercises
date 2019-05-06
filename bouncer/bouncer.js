
function bouncer(args) {
  var isTruthy = args.filter((val) => {
    if(Boolean(val)){
      return val;
    } 
  })
  return isTruthy;
} 
`
export {
  bouncer,
};
