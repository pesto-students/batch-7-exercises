
function sumEvenArgs(...arr) {
  return arr.reduce((acc, el)=> {
    let isEven = el % 2 === 0;
    return acc + (isEven ? el : 0);
  }, 0);
}

export {
  sumEvenArgs,
};
