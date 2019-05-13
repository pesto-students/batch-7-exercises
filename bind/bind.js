
function bind(Fn, bindTo, ...rest) {
  return Fn.bind(bindTo, ...rest);
}

export {
  bind,
};
