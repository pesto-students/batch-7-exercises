const fs = require('fs');

const getExtension = (fileName) => {
  const index = fileName.lastIndexOf('.');
  return index === -1 ? '' : fileName.substr(index + 1);
};

function filteredNamesRecursive(rootDir, fileExtension) {
  const dirs = [rootDir];
  const listOfFileNames = [];

  while (dirs.length) {
    const dirName = dirs.pop();
    const newFiles = fs.readdirSync(dirName);
    listOfFileNames.push(...newFiles);
    const fullPaths = newFiles.map(file => `${dirName}/${file}`);
    const newFoundDirs = fullPaths.filter(file => fs.statSync(file).isDirectory());
    dirs.push(...newFoundDirs);
  }

  const filteredFiles = listOfFileNames.filter(
    fileName => getExtension(fileName) === fileExtension,
  );

  return filteredFiles.sort();
}

export { filteredNamesRecursive };
