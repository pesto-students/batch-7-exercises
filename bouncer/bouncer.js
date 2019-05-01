
function bouncer(array) {
  return array.filter(element => (typeof element === 'string' || typeof element === 'number') && element);
}

export {
  bouncer,
};
