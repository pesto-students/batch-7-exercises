function binaryAgent(binaryText) {
  const binaryArray = binaryText.split(' ');
  return binaryArray.reduce(
    (result, character) => result + String.fromCharCode(parseInt(character, 2)),
    '',
  );
}

export { binaryAgent };
