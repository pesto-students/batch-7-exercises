 function negativeIndex(array) {
  var handler = {
    get: function(target, propname) {
      if(propname == 'length'){
        return target.length;
      } 
      if(propname == 'symbol'){ 
        return target;
      }
    },
    set:function(target,propname,value){

    }
};
  return new Proxy(array,handler);

}

// retutn Reflect.get(target,propname);
// set(target,propname,__values)
export {
  negativeIndex,
};
