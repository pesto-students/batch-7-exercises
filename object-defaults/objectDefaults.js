function objectDefaults(object, defaultObject) {
  for (var key in object) {
    defaultObject[key] = object[key];
  }
  return defaultObject;
}

export { objectDefaults };
