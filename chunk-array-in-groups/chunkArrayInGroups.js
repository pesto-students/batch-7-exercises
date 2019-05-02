
function chunkArrayInGroups(arr,groupSize) {
  var groupedArray = [];
  var masterArrays = [];
  var noOfGroups = Math.floor(arr.length/groupSize);
  var lowerBound = 0;
  var upperBound = groupSize; 
  while(noOfGroups!=0)
  {
    groupedArray = arr.slice(lowerBound,upperBound);
    masterArrays.push(groupedArray);
    noOfGroups--;
    // Push the remaining elements of array
    if(noOfGroups==0&&(upperBound!=arr.length))
    {
      masterArrays.push(arr.slice(upperBound,arr.length));
    }
    else
    { 
      lowerBound = upperBound;
      upperBound = upperBound + upperBound; 
    }
  } 
  return masterArrays;
}

export {
  chunkArrayInGroups,
};
