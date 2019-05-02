function objectDefaults(obj, defaultObj) {
  return {
    ...defaultObj,
    ...obj,
  };
}

export { objectDefaults };
