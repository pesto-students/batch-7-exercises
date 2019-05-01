function binaryAgent(binaryValue) {
  const binaryArray = binaryValue.split(' ');

  const outputAlphabet = binaryArray.reduce(
    (alphabetValues, binary) => alphabetValues + String.fromCharCode(parseInt(binary, 2)),
    '',
  );

  return outputAlphabet;
}

export { binaryAgent };
