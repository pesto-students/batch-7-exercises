function objectDefaults(mainObject, defaultValues) {
  const outputObject = mainObject;

  Object.keys(defaultValues).forEach((prop) => {
    if (!(prop in mainObject)) {
      outputObject[prop] = defaultValues[prop];
    }
  });
  return outputObject;
}

export { objectDefaults };
