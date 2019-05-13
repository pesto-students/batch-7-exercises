

function truthCheck(array, property) {
  for (let obj of array) {
    if (!obj.hasOwnProperty(property) || obj[property] === null ||obj[property] === 0 || obj[property] === '') {
      return false;
    }
  }
  return true;
}

export {
  truthCheck,
};
