describe('Logical operators', () => {
  test('(a && b) || c', () => {
    expect(('a' && 'b') || 'c').toBe(('a' && 'b') || 'c');
  });

  test('(a || b) && c', () => {
    expect(('a' || 'b') && 'c').toBe(('a' || 'b') && 'c');
  });

  test('null && (b || c)', () => {
    expect(null && ('b' || 'c')).toBe(null && ('b' || 'c'));
  });

  test('a && (null || c)', () => {
    expect('a' && (null || 'c')).toBe('a' && (null || 'c'));
  });

  test('a && (b || null)', () => {
    expect('a' && ('b' || null)).toBe('a' && ('b' || null));
  });

  test('a || (b && c)', () => {
    expect('a' || ('b' && 'c')).toBe('a' || ('b' && 'c'));
  });

  test('null || (b && c)', () => {
    expect(null || ('b' && 'c')).toBe(null || ('b' && 'c'));
  });

  test('a || (null && c)', () => {
    expect('a' || (null && 'c')).toBe('a' || (null && 'c'));
  });
});
