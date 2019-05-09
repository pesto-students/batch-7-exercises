
function sumAll(arr) {
  debugger
  let max  =  Math.max(...arr);
  let min  = Math.min(...arr);

  let sum = max + min;
  for(let i=min+1;i<max;i++){
    sum = sum + i;
  }
  return sum;
}

export {
  sumAll,
};
