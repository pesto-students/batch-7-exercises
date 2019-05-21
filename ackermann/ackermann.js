
function ackermann({ m, n }) {
  if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ackermann({ m: m - 1, n: 1 });
  }
  if (m > 0 && n > 0) {
    const valueOfN = ackermann({ m, n: n - 1 });
    return ackermann({ m: m - 1, n: valueOfN });
  }
  return 0;
}

export {
  ackermann,
};
