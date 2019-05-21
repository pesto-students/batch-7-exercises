const fs = require('fs');

const getExtension = (fileName) => {
  const index = fileName.lastIndexOf('.');
  return index === -1 ? '' : fileName.substr(index + 1);
};

function filteredNamesRecursive(dirname, fileExtension) {
  // TODO check for dir and recursive logic 
  // const listOfFileNames = fs.readdirSync(dirname);

  let dirs = [dirname];
  const listOfFileNames 

  while(dirs) {
    const dirName = dirs.pop()
    const newFiles = fs.readdirSync(dirName);
    listOfFileNames.push(...newFiles);
    listOfFileNames.filter(files => )
  }

  const filteredFiles = listOfFileNames.filter(
    fileName => getExtension(fileName) === fileExtension,
  );

  return filteredFiles.sort();
}

export { filteredNamesRecursive };
