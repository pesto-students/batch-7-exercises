function objectDefaults(object,defaultObject) {
  for (let key in defaultObject) {
    if (!object.hasOwnProperty(key)) {
      object[key]= defaultObject[key];
    }
  }
  return object;
}

export {
  objectDefaults,
};
