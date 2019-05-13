function ackermann({ m, n }) {
  // A(m,n) = n+1             when m = 0
  // A(m,n) = A(m-1,1)        when m > 0 and n = 0
  // A(m,n) = A(m-1,A(m,n-1)) when m > 0 and n > 0
  // let { m: mVal, n: nVal } = obj;
  if (m == 0) {
    return n + 1;
  } else if (m > 0 && n == 0) {
    return ackermann({ m: m - 1, n: 1 });
  } else if (m > 0 && n > 0) {
    return ackermann({ m: m - 1, n: ackermann({ m: m, n: n - 1 }) });
  }
}

export { ackermann };
