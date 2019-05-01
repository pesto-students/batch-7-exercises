
function isTriangle(side1,side2,side3) {
  //For a triangle sum of any 2 sides should be greater than 3rd  
  return ((side1+side2)>side3) && ((side3+side2)>side1) && ((side3+side2)>side2); 
}

export {
  isTriangle,
};
