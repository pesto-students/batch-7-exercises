function aperture(n, arr) {
  let result = [];
  if (n > arr.length) {
    return [];
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (n <= arr.length - i) {
        console.log(arr.slice(i, i + n));
        result.push(arr.slice(i, i + n));
      }
    }
  }
  return result;
}

export { aperture };
