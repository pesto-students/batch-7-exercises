
function allOfConditions(...args) {
  return fns => args.reduce((previousFunction, currenFunction) => (previousFunction ? currenFunction(fns) : null), true); 
}

export {
  allOfConditions,
};
