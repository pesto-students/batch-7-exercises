
function findElement(arr,operation) {
  for(var i =0;i<arr.length;i++)
  {
    if(operation(arr[i]))
    {
      return arr[i];
    }
  }
}

export {
  findElement,
};
