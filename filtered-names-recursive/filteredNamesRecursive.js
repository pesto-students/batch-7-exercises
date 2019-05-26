import path from 'path';
import fs from 'fs';
const filterFiles = [];
function filteredNamesRecursive(dir, fileType) {

  const files = fs.readdirSync(dir);
  files.forEach((fileName) => {
    const absoulteFileName = `${dir}/${fileName}`;
    const stat = fs.statSync(absoulteFileName);
    if (stat && stat.isDirectory()) {
      filteredNamesRecursive(absoulteFileName, fileType);
    }
    if (fileName.includes(fileType)) {
      filterFiles.push(fileName);
    }
  });
  return filterFiles;
}

export {
  filteredNamesRecursive,
};
