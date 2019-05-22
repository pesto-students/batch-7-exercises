import { greet, greetEmitter } from './nodeEvent';

const events = require('events');

describe('Template Test', () => {
  test('Write your own test cases here', async () => {
    const listener = greetEmitter.on('greet', name => `hello ${name}`);
    expect().toBe(`hello `);

  });
});
