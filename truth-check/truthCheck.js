
function truthCheck(array,keyToBeChecked) {
	for(let i=0;i<array.length;i++){
		for(let key in array[i]){
			if(!array[i][keyToBeChecked]){
				return false;
			}
		}
	}
	return true;
}

export {
  truthCheck,
};
