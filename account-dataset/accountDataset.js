const dataset = require('./dataset.json');

const { bankBalances } = dataset;

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map((account) => {
    const modifiedAccount = account;
    const roundedAmount = Math.round(account.amount);
    modifiedAccount.rounded = roundedAmount;
    return modifiedAccount;
  });
}

function sumOfBankBalances() {
  return bankBalances.reduce((totalAmount, account) => totalAmount + account, 0);
}

function addInterest({ account, percentage }) {
  const modifiedAccount = account;
  modifiedAccount.amount += account.amount * percentage;
  return modifiedAccount;
}

function sumOfInterests() {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

  const filteredAccounts = bankBalances.filter(account => states.includes(account.state));

  // Adds 18.9% interest to it & rounds to the nearest cents
  const totalInterests = filteredAccounts.reduce((total, account) => {
    const modifiedAccount = addInterest({ account, percentage: 18.9 });
    return total + modifiedAccount.amount;
  }, 0);
  return totalInterests;
}

function higherStateSums() {
  const states = [];
  bankBalances.forEach((account) => {
    const { state } = account;
    const amount = parseInt(account.amount, 10);
    if (states[state] === undefined) {
      states[state] = amount;
    } else {
      states[state] += amount;
    }
  });
  
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
