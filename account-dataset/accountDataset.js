const dataset = require('./dataset.json');

const { bankBalances } = dataset;

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(({ amount, ...rest }) => ({
    amount,
    rounded: Math.round(amount),
    ...rest,
  }));
}

function sumOfBankBalances() {
  const sum = bankBalances.reduce((totalAmount, { amount }) => totalAmount + parseFloat(amount), 0);
  return Math.round(sum * 100) / 100;
}

function sumOfInterests() {
  const PERCENTAGE_INTEREST = 18.9;
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

  const filteredAccounts = bankBalances.filter(account => states.includes(account.state));

  // Adds 18.9% interest to it & rounds to the nearest cents
  const totalInterests = filteredAccounts.reduce((total, { amount }) => {
    const interestAmount = parseFloat((amount * PERCENTAGE_INTEREST) / 100);
    const newAmount = parseFloat(interestAmount + amount).toFixed(2);

    return total + parseFloat(newAmount);
  }, 0);
  return parseFloat(totalInterests.toFixed(2));
}

function higherStateSums() {
  const THRESOLD_AMOUNT_PER_STATE = 1000000;
  const states = [];
  bankBalances.forEach((account) => {
    const { state } = account;
    const amount = parseFloat(account.amount);
    if (!states[state]) {
      states[state] = amount;
    } else {
      states[state] += amount;
    }
  });

  const filteredStateAmounts = Object.values(states).filter(
    amount => amount > THRESOLD_AMOUNT_PER_STATE,
  );

  return filteredStateAmounts.reduce((finalSum, amount) => finalSum + amount, 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
