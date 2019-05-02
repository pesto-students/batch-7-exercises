
function sumFibs(...args) {
  let current = 1;
  let adjacent = 1;
  let accumulate = current;
  while (adjacent <= args) {
    accumulate += (adjacent % 2 !== 0) ? adjacent : 0;
    adjacent += current;
    current = adjacent - current;
  }
  return accumulate;
}

export {
  sumFibs,
};
