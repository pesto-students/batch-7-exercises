function sum(a, b) {
  return a + b;
}

describe('sum', () => {
  test('should add two numbers correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
