
function objectDefaults(obj,defaultObj) {
  let finalObject={};
  for(let key in obj){
  	for(let key1 in defaultObj){
  		if(key===key1){
  			delete defaultObj[key1];
  		}
  	}
  }

  return {...obj,...defaultObj};
}

export {
  objectDefaults,
};
