
function primalityTest(n) {
  if(n<2){
    return false;
  }
  for(let i=2;i<=Math.floor(n/2);i++){
    if(n%i==0){
      return false;
    }
  }
  return true;
}

export {
  primalityTest,
};
