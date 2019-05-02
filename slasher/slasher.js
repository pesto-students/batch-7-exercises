
function slasher(array,num) {
  return array.filter((element,index) => index+1>num);
}

export {
  slasher,
};
