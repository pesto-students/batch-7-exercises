
function bind(functionToBePerformed, obj,...args) {
  return functionToBePerformed.bind(obj,...args)
}

export {
  bind,
};
