const fs = require('fs');
const path = require('path');

const allFiles = [];

function getFilesWithExtension(files, fileExtension) {
  const matchingFiles = [];
  files.forEach((fileName) => {
    if (fileName.includes(fileExtension)) {
      matchingFiles.push(fileName);
    }
  });
  return matchingFiles;
}

function getFilesRecursively(directory) {
  const listOfFiles = fs.readdirSync(directory);
  listOfFiles.forEach((file) => {
    const filePath = path.resolve(directory, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFilesRecursively(filePath);
    } else {
      allFiles.push(file);
    }
  });
}

function filteredNamesRecursive(directory, fileExtension) {
  getFilesRecursively(directory);
  return getFilesWithExtension(allFiles, fileExtension);
}

export { filteredNamesRecursive };
