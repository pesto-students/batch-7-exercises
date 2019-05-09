
function sumFibs(number) { 
  var previous = 1;
  var current = 1; 
  var finalSum = current + previous;
  for(var i=1;i<number;i++)
  {   
    if(i==current + previous)
    {
      // Swap to update sum 
      previous = current;
      current = i;
      if(i%2!=0)
      {
        finalSum = i + finalSum;
      }
    }
  }
  return finalSum;
}

export {
  sumFibs,
};
