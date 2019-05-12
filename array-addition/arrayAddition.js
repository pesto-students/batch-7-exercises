
function arrayAddition(arr1,arr2) {

    if(arr1.length === 0 || arr2.length === 0 || typeof arr1 !== "object" || typeof arr2 !== "object") {
      throw new Error("Invalid Input")
    }
    let addedArray = []
    if(arr1.length > arr2.length || arr1.length === arr2.length){
          addedArray = arr1.map((number,index)=> {
           if(typeof number !== "number" || typeof arr2[index] !== "number"){
            throw new Error("Invalid Input")
           }
          return number + arr2[index]
         })
     }
     if(arr2.length > arr1.length){
      addedArray = arr2.map((number,index)=> {
       if(typeof number !== "number" || typeof arr1[index] !== "number"){
        throw new Error("Invalid Input")
       }
      return number + arr1[index]
     })
 }
  return addedArray
}

export {
  arrayAddition,
};
