describe('Logical operators', () => {
  test('(a && b) || c', () => {
    expect(('a' && 'b') || 'c').toBe('b');
  });

  test('(a || b) && c', () => {
    expect(('a' || 'b') && 'c').toBe('c');
  });

  test('null && (b || c)', () => {
    expect(null && ('b' || 'c')).toBe(null);
  });

  test('a && (null || c)', () => {
    expect('a' && (null || 'c')).toBe('c');
  });

  test('a && (b || null)', () => {
    expect('a' && ('b' || null)).toBe('b');
  });

  test('a || (b && c)', () => {
    expect('a' || ('b' && 'c')).toBe('a');
  });

  test('null || (b && c)', () => {
    expect(null || ('b' && 'c')).toBe('c');
  });

  test('a || (null && c)', () => {
    expect('a' || (null && 'c')).toBe('a');
  });
});
