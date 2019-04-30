import { convertToRoman } from './convertToRoman';

describe('convertToRoman', () => {
  test('should return correct roman', () => {
    expect(convertToRoman(2)).toEqual('II');
    expect(convertToRoman(3)).toEqual('III');
    expect(convertToRoman(4)).toEqual('IV');
    expect(convertToRoman(5)).toEqual('V');
    expect(convertToRoman(12)).toEqual('XII');
    expect(convertToRoman(45)).toEqual('XLV');
    expect(convertToRoman(83)).toEqual('LXXXIII');
    expect(convertToRoman(501)).toEqual('DI');
    expect(convertToRoman(891)).toEqual('DCCCXCI');
    expect(convertToRoman(1004)).toEqual('MIV');
    expect(convertToRoman(2014)).toEqual('MMXIV');
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX');
  });
});
