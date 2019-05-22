const path = require('path');

function stripPath(pathString, from) {
  const relativePath = path.relative('./', pathString);
  if (typeof from !== 'string') {
    return pathString;
  }
  return path.relative(from, relativePath);
}

export { stripPath };
