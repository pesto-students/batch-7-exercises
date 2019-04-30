import { rectangleDiagonal } from './rectangleDiagonal';

describe('rectangleBlock', () => {
  it('calculates rectangle diagonal', () => {
    expect(rectangleDiagonal(3, 4)).toBe(5);
  });
});
