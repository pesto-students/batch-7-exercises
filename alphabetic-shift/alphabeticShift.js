
function alphabeticShift(str) {
  let arr = str.split('');
  arr = arr.map( el => {
    //Shifts it one letter ahead
    el = el.charCodeAt()+1;
    return String.fromCharCode(el);
  });
  arr = arr.join('');
  return arr.toString();
}

export {
  alphabeticShift,
};
