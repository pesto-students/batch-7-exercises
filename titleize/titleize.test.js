import { titleize } from './titleize';

describe('titleize', () => {
  test('should titleize the given string', () => {
    expect(titleize('')).toBe('');
    expect(titleize('unicorns and rainbows')).toBe('Unicorns And Rainbows');
    expect(titleize('UNICORNS AND RAINBOWS')).toBe('Unicorns And Rainbows');
    expect(titleize('unicorns-and-rainbows')).toBe('Unicorns-And-Rainbows');
    expect(titleize('UNICORNS-AND-RAINBOWS')).toBe('Unicorns-And-Rainbows');
    expect(titleize('unicorns   and rainbows')).toBe('Unicorns   And Rainbows');
  });
});
