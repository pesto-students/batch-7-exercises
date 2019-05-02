
function rectangleDiagonal(...args) {
   var side1 = args[0];
   var side2 = args[1];
   var diagonalLength = Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2));
   return diagonalLength;

}

export {
  rectangleDiagonal,
};
