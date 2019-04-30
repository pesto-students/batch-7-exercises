import { bitcoinTicker } from './bitcoinTicker';

describe('bitcoinTicker', () => {
  test('should fetch an object with data attribute', async () => {
    const response = await bitcoinTicker({ limit: 10 });
    expect(response).toHaveProperty('data');
  });
});
