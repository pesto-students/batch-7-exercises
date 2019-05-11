
function greet(name) {
  return new Promise((resolve) => {
    resolve(`Hey ${name}`);
  });
}

export {
  greet,
};
