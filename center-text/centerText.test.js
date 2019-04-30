import { centerText } from './centerText';

describe('centerText', () => {
  const input = [
    { s: 'the quick brown fox jumped over the lazy dog', n: 11 },
    { s: 'Jaded zombies acted quaintly but kept driving their oxen forward', n: 15 },
    { s: 'A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent', n: 20 },
  ];

  const output = [
    [
      ' the quick ',
      ' brown fox ',
      'jumped over',
      ' the lazy  ',
      '    dog    ',
    ],
    [
      ' Jaded zombies ',
      'acted quaintly ',
      '   but kept    ',
      ' driving their ',
      ' oxen forward  ',
    ],
    [
      ' A mad boxer shot a ',
      'quick, gloved jab to',
      'the jaw of his dizzy',
      '      opponent      ',
    ],
  ];

  for (let i in input) {
    it('Return proper texts', () => {
      expect(centerText(input[i].s, input[i].n)).toEqual(output[i])
    })
  }
});
