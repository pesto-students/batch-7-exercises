
function blockScoping(n) {
  const callbacks = [];
  for (let i = 0; i <= 10; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[n]();
}

export {
  blockScoping,
};
