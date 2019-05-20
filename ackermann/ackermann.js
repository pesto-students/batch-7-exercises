function ackermann(object) {
  let { m, n } = object;
  if (m == 0) {
    return n + 1;
  } else if (m > 0 && n === 0) {
    return ackermann({m: m-1, n :1});
  } else if (m > 0 && n >0) {
    return ackermann({m : m-1 ,n : ackermann({m,n :n-1})});
  } else {
    throw new Error();
  }

}

export { ackermann };
