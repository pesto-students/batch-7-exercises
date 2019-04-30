import { sundanFn } from './sudanFn';

describe('sudan function', () => {
  test('should implement sudan function correctly', () => {
    expect(sundanFn({ n: 0, x: 5, y: 8 })).toEqual(13);
    expect(sundanFn({ n: 1, x: 3, y: 4 })).toEqual(74);
    expect(sundanFn({ n: 2, x: 5, y: 1 })).toEqual(440);
    expect(sundanFn({ n: 2, x: 0, y: 2 })).toEqual(19);
  });
});
