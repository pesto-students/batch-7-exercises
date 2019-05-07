function ackerman(m, n) {
  return m === 0 ? n + 1 : ackerman(m - 1, n === 0  ? 1 : ackerman(m, n - 1));
 }
function ackermann(obj) {
  const { m, n } = obj;

const result = ackerman (m, n);
return result;
}


export {
  ackermann,
};
