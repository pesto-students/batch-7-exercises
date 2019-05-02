//@GET it checked


import { error } from "util";

function threeSum(...args) {
  //Flattening nested array into arr
  var arr = args.flat();
  if(arr.length <=3){
    throw error;
  }
  else if (typeof(arr[arr.length-1]) != 'number'){
    throw error;
  }

    // Fix the first element as arr[i] 
    for (var i = 0; i < arr.length - 3; i++) { 
  
      // Fix the second element as arr[j] 
      for (var j = i + 1; j < arr.length - 2; j++) { 

          // Now look for the third number 
          for (var k = j + 1; k < arr.length -1; k++) { 
              if (arr[i] + arr[j] + arr[k] == arr[arr.length-1]) { 
                var arr1 = [ arr[i], arr[j], arr[k] ];
                   
                      return   ( arr1 ); 
                  
              } 
          } 
      } 
  } 

  // If we reach here, then no triplet was found 
  return null; 
}

export {
  threeSum,
};
