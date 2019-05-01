
function counter(...args) {
  const newCounter = counter();
  return (
    function(){
      return newCounter(); // 1
//newCounter(); // 2

    }
  );
}

export {
  counter,
};
