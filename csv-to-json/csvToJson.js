const fs = require('fs');
const readline = require('readline');

async function csvToJson(file) {
  const fileStream = fs.createReadStream(file);

  const readLineInterface = readline.createInterface({
    input: fileStream,
  });

  const csvArray = [];
  return new Promise((resolve) => {
    readLineInterface.on('line', (line) => {
      const values = line.split(',');
      csvArray.push(values);
    });
    readLineInterface.on('close', () => {
      const fixture = [];
      const objectKeys = csvArray.shift();
      csvArray.forEach((avenger) => {
        const avengerObject = {};
        avenger.forEach((characteristic, index) => {
          avengerObject[objectKeys[index]] = characteristic;
        });
        fixture.push(avengerObject);
      });
      resolve(fixture);
    });
  });
}

export { csvToJson };
