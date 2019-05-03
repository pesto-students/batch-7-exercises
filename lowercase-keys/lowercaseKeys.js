
function lowercaseKeys(object) {
	let lowercaseObject={};
	for(let key in object){
		lowercaseObject[key.toLowerCase()]=object[key]
	}
	return lowercaseObject;
}

export {
  lowercaseKeys,
};
