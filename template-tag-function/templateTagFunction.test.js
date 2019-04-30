import { callTemplateTagFunction } from './templateTagFunction';

describe('html', () => {
  test('should escape ", <, >, & when tagged template is passed', () => {
    expect(callTemplateTagFunction()).toBe('The expression 5 &amp;gt; 4 is &amp;quot;true&amp;quot; &amp; 3 &amp;lt; 1 is false');
  });
});
