
function diffArray(...args) {
	const array1=args[0];
	const array2=args[1];
	let returnedArray= array1.filter((element)=> array2.indexOf(element)===-1)
	return returnedArray.concat(array2.filter((element)=> array1.indexOf(element)===-1))
}

export {
  diffArray,
};
