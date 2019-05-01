
function isTriangle(a,b,c) {
  return ((a+b) > c) &&  ((b +c)>a) && ((c+a) > b);
}

export {
  isTriangle,
};
