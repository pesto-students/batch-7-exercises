/* eslint-disable class-methods-use-this */
const fs = require('fs');
const { green, red, bgGreen } = require('chalk');

const { log } = console;

const SUBMISSION_FILE = 'exercisesSubmission.json';
const COMPLETED_KEY = 'completed';
const EXERCISES_KEY = 'exercises';
const NUMBER_OF_SPACES_JSON = 4;

const extractFolderNameFrom = (filepath) => {
  const folderNameWithTestExtractorPattern = /^.*\/(.*)\/.*js/i;
  const matchObj = filepath.match(folderNameWithTestExtractorPattern);
  if (matchObj !== null) {
    return matchObj[1];
  }
  return null;
};

class PestoCustomJestReporter {
  onTestResult(test, testResult, aggregateResult) {
    const { testFilePath, numFailingTests, numTotalTests } = testResult;
    console.log(testFilePath)
    const folderName = extractFolderNameFrom(testFilePath);
    if (numFailingTests === 0) {
      log(bgGreen.bold(`\n${'='.repeat(10)} ${'Auto marking'.toUpperCase()} ${folderName} in ${SUBMISSION_FILE}`));

      let fileContent;

      try {
        fileContent = fs.readFileSync(SUBMISSION_FILE, 'utf-8');
      } catch (_) {
        throw new Error(red(`Cannot read ${SUBMISSION_FILE} file`));
      }

      const jsObject = JSON.parse(fileContent);
      console.log(jsObject);
      const actualExerciseObj = jsObject[EXERCISES_KEY][folderName];
      const folderNameFound = actualExerciseObj !== undefined;

      if (folderNameFound) {
        if (actualExerciseObj[COMPLETED_KEY] !== true) {
          jsObject[EXERCISES_KEY][folderName][COMPLETED_KEY] = true;
          try {
            fs.writeFileSync(
              SUBMISSION_FILE,
              JSON.stringify(jsObject, null, NUMBER_OF_SPACES_JSON),
            );
          } catch (_) {
            log(red.bold(`PLEASE MANUALLY set the completed status of ${folderName}`));
            throw new Error(red(`Cannot write to ${SUBMISSION_FILE} file`));
          }
          log(green(`Successfully marked ${green.bold(folderName)}`));
        } else {
          log(green(`${green.bold(folderName)} is already marked as true`));
        }
      } else {
        log(red(`The name ${folderName} was not in ${SUBMISSION_FILE}`));
        log(red.bold(`PLEASE MANUALLY set the completed status of ${folderName}`));
      }
    }
  }
}

module.exports = PestoCustomJestReporter;
