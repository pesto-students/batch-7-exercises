
function blockScoping(n) {
  var callbacks = [];
  for (let i = 0; i <= n; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[n]();
}

export {
  blockScoping,
};