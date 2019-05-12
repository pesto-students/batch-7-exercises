function blockScoping(val) {
  var callbacks = [];
  for (var i = 0; i <= 10; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[n]();
}

export { blockScoping };
