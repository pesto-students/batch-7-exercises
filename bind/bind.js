
function bind(callback, obj, ...args) {
  return callback.bind(obj, ...args);
}

export {
  bind,
};
