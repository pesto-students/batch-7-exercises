
function alternatingCharacters(arr) {
  let deletionCount = [];
  arr.map((el)=>{
    let count = 0;
    let prev = "";
    for (var index in el) { 
       if(prev==el[index]){
         count++;
       }
       else{
         prev = el[index];
       }
    }
    deletionCount.push(count);
  });
  return deletionCount;
}

export {
  alternatingCharacters,
};
