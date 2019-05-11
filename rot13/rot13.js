
function rot13(str) {
  return str.replace(/([A-M])|([N-Z])/g, (match, case1, case2) => {
    if (match === case1) {
      return String.fromCharCode(match.charCodeAt(0) + 13);
    }
    if (match === case2) {
      return String.fromCharCode(match.charCodeAt(0) - 13);
    }
    return '';
  });
}

export {
  rot13,
};
