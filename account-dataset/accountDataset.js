const { bankBalances } = require('./dataset.json');

const BALANCE_THRESHOLD = 100000;
const RICH_STATE_THRESHOLD = 1000000;
function hundredThousandairs() {
  return bankBalances.filter(bank => bank.amount > BALANCE_THRESHOLD);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(bank => ({
    ...bank,
    rounded: Math.round(bank.amount),
  }));
}

function sumOfBankBalances() {
  const total = bankBalances.reduce(
    (sum, { amount: amountString }) => sum + parseFloat(amountString),
    0,
  );
  return parseFloat(total.toFixed(2));
}

function calculateInterest(amount) {
  return (18.9 / 100) * amount;
}

function roundBy(number, by) {
  const multiplier = 10 ** by;
  return Math.round(number * multiplier) / multiplier;
}

function sumOfInterests() {
  const statesWithInterest = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const interests = bankBalances.filter(({ state }) => statesWithInterest.includes(state));

  const sumOfInterest = interests.reduce((interestSum, { amount: amountString }) => {
    const amountParsed = parseFloat(amountString);
    return interestSum + calculateInterest(amountParsed);
  }, 0);
  return sumOfInterest;
}

function hashOfBanks() {
  const stateSums = [];

  const distinctStateBanks = bankBalances.filter(
    (bank, index, array) =>
      // console.log(bank.state);
      // console.log(array.indexOf(bank.state));
      array.indexOf(bank.state) === index,
  );

  // console.log(distinctStateBanks);
  // bankBalances.forEach((bank) => {
  //   if (stateSums.includes({ state: bank.state })) {
  //     stateSums.forEach((bankObj) => {
  //       if (bankObj.state === bank.state) {
  //         const amount = bank.amount + bankObj.amount;
  //         return {
  //           ...bankObj,
  //           amount,
  //         };
  //       }
  //       return bankObj;
  //     });
  //   } else {
  //     stateSums.push(bank);
  //   }
  // });
  // return stateSums;
}

function higherStateSums() {
  const bankTotals = hashOfBanks();
  return bankTotals.reduce((aggregate, { amount }) => {
    if (amount > RICH_STATE_THRESHOLD) {
      return aggregate + amount;
    }
    return aggregate;
  }, 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
