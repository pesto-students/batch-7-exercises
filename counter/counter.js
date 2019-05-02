var count = 0; 
function counter() { 
  count = 0;
  return function(){ 
    count++;
    return count; 
  }
}

export {
  counter,
};
