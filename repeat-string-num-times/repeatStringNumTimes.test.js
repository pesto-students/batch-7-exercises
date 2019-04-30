import { repeatStringNumTimes } from './repeatStringNumTimes';

describe('repeatStringNumTimes', () => {
  test('should return the correct string', () => {
    expect(repeatStringNumTimes('*', 3)).toEqual('***');
    expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc');
    expect(repeatStringNumTimes('abc', -2)).toEqual('');
  });
});
