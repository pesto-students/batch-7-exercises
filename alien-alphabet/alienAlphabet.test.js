import { alienAlphabet } from './alienAlphabet';

describe('alienAlphabet', () => {
  it('works for single character words', () => {
    expect(alienAlphabet(['c', 'b', 'a'])).toEqual(['c', 'b', 'a']);
  });

  it('works when letters are out of order in subsequent slots', () => {
    expect(alienAlphabet(['c', 'bb', 'bc'])).toEqual(['c', 'b']);
  });
});
