function repeatStringNumTimes(stringValue,numberOfTimes) {

  if(numberOfTimes > 0){
   var valueToBePrinted = stringValue.repeat(numberOfTimes)
    return valueToBePrinted
  }
  else
  return;
}
export {
  repeatStringNumTimes,
};
