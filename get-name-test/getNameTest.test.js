function getName(name) {
  if (typeof name === 'string') return `You entered: ${name}`;
  throw new Error('name should be of type string');
}


describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getName('Martin Garrix');
    const expected = /Ramu/;
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'there was an error';
    expect(() => getName(123)).toThrow(expected);
  });
});
