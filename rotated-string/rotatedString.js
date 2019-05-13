function rotatedString(orgStr, rotatedStr) {
  if (orgStr === rotatedStr) {
    return false;
  }
  const orgCharArr = orgStr.split('');
  const rotatedCharArr = rotatedStr.split('');
  let indexInRotatedStr = rotatedCharArr.indexOf(orgCharArr[0]);
  if (indexInRotatedStr < 0) {
    return false;
  }
  let rotated = true;
  orgCharArr.forEach((char) => {
    if (char !== rotatedCharArr[indexInRotatedStr]) {
      rotated = false;
    }
    indexInRotatedStr = (indexInRotatedStr + 1) % orgCharArr.length;
  });
  return rotated;
}

export { rotatedString };
