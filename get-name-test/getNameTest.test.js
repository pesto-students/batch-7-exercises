function getName(name) {
  if (typeof name === 'string') return `You entered: ${name}`;
  throw new Error('there was an error');
}


describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getName('/Ramu/');
    const expected = /Ramu/;
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'there was an error';
    expect(() => getName(123)).toThrow(expected);
  });
});
