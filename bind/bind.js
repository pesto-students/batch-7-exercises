
function bind(cb, object, ...args) {
  return cb.bind(object, ...args);
}


export {
  bind,
};