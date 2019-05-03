 function swap(obj){
    var ret = {};
    for(var key in obj){
      ret[obj[key]] = key;
    }
    return ret;
  }