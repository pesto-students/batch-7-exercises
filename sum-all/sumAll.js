
function sumAll([no1, no2]) {
  const isNo1IsLower = (no1 < no2);
  const lowerNo = isNo1IsLower ? no1 : no2;
  const highNo = isNo1IsLower ? no2 : no1;

  let sum = 0;
  for (let i = lowerNo; i <= highNo; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
