
function truthCheck(predicates, propName) {
  return predicates.reduce((acc, predicate) => acc && Boolean(predicate[propName]), true);
}

export {
  truthCheck,
};
