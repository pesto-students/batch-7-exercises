describe('Logical operators', () => {
  test('(a && b) || c', () => {
    expect(('a' && 'b') || 'c').toBe('replace this');
  });

  test('(a || b) && c', () => {
    expect(('a' || 'b') && 'c').toBe('replace this');
  });

  test('null && (b || c)', () => {
    expect(null && ('b' || 'c')).toBe('replace this');
  });

  test('a && (null || c)', () => {
    expect('a' && (null || 'c')).toBe('replace this');
  });

  test('a && (b || null)', () => {
    expect('a' && ('b' || null)).toBe('replace this');
  });

  test('a || (b && c)', () => {
    expect('a' || ('b' && 'c')).toBe('replace this');
  });

  test('null || (b && c)', () => {
    expect(null || ('b' && 'c')).toBe('replace this');
  });

  test('a || (null && c)', () => {
    expect('a' || (null && 'c')).toBe('replace this');
  });
});
