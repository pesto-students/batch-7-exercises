const http = require('https');

const options = {
  hostname: 'api.coinmarketcap.com',
  path: '/v2/ticker/',
  method: 'GET',
};

function bitcoinTicker({ limit }) {
  return new Promise((resolve) => {
    http.get(options, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        const jsonData = JSON.parse(rawData);
        const coins = jsonData.data;
        const topCoins = [];
        for (const key in coins) {
          if (coins[key].rank <= limit) {
            topCoins.push(coins[key].name);
          }
        }
        console.log(topCoins);
        resolve(jsonData);
      });
    });
  });
}
export { bitcoinTicker };
