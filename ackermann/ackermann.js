function ackermann({ m, n }) {
  if (m === 0) {
    return n + 1;
  }
  if (m > 0) {
    if (n === 0) {
      return ackermann({ m: m - 1, n: 1 });
    }
    if (n > 0) {
      return ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
    }
  }
  throw new Error('Invalid input.');
}

export { ackermann };
