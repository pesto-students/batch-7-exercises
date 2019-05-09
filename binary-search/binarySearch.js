
function binarySearch(sortedArray,n) {
  if(sortedArray.length == 1)
  {
    sortedArray[0] == n;
    return 0;
  }
  else
  { 
  let mid = Math.floor(sortedArray/2);
  if(sortedArray[mid]==n){
    return mid;
  }
  if(sortedArray[mid]>n){
    binarySearch(sortedArray.slice(mid+1,sortedArray.length),n);
  }
  if(sortedArray[mid]<n){
    binarySearch(sortedArray.slice(0,mid-1),n);
  } 
  return -1;
}
}

export {
  binarySearch,
};
