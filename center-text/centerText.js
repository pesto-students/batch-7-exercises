const canWordFitIn = (word, currentSize, sizeLimit) => word.length + currentSize <= sizeLimit;

const isNotEmpty = s => s.length > 0;

const centerSentence = (sentence, sizeLimit) => {
  const requiredPaddings = sizeLimit - sentence.length;
  const halfPad = requiredPaddings / 2;
  const spaceBefore = Math.floor(halfPad);
  const spaceAfter = Math.ceil(halfPad);

  const SPACE = ' ';

  return `${SPACE.repeat(spaceBefore)}${sentence}${SPACE.repeat(spaceAfter)}`;
};

function centerText(sentence, n) {
  const listOfCenteredSentence = [];
  const listOfWord = sentence.split(' ');

  let newChunk = '';
  listOfWord.forEach((word) => {
    if (!canWordFitIn(word, newChunk.length, n) && isNotEmpty(newChunk)) {
      const newSentence = newChunk.trim();
      listOfCenteredSentence.push(centerSentence(newSentence, n));
      newChunk = '';
    }

    newChunk += `${word} `;
  });

  // if last word not added
  if (newChunk.length > 0) {
    listOfCenteredSentence.push(centerSentence(newChunk.trim(), n));
  }

  return listOfCenteredSentence;
}

export { centerText };
