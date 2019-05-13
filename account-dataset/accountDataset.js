const dataset = require("./dataset.json");
const bankBalanceArray = dataset["bankBalances"];

function datasetWithRoundedDollar() {
  var updatedBankBalanceArray = [];
  bankBalanceArray.map(function(bankBalance) {
    updatedBankBalanceArray.push({
      amount: bankBalance["amount"],
      state: bankBalance["state"],
      rounded: Math.round(bankBalance["amount"])
    });
  });
  return updatedBankBalanceArray;
}

function sumOfBankBalances() {
  var totalAmountSum = bankBalanceArray.reduce(function(sum, bankBalance) {
    return sum + parseFloat(bankBalance.amount);
  }, 0);
  return parseFloat(totalAmountSum.toFixed(2));
}

function sumOfInterests() {
  const interestPercentage = 18.9;
  var stateCodeArray = ["WI", "IL", "WY", "OH", "GA", "DE"];
  function getInterestOnBankBalance(sum, bankBalance) {
    var amount = parseFloat(bankBalance.amount);
    return parseFloat(
      (
        sum +
        (stateCodeArray.indexOf(bankBalance.state) != -1
          ? (amount * interestPercentage) / 100
          : 0)
      ).toFixed(2)
    );
  }
  var totalAmountInterestSum = bankBalanceArray.reduce(
    getInterestOnBankBalance,
    0
  );
  return totalAmountInterestSum;
}

function higherStateSums() {
  const minimumAmountCap = 1000000;

  var statesBankBalance = {};
  bankBalanceArray.map(function(bankBalance) {
    if (statesBankBalance[bankBalance.state]) {
      statesBankBalance[bankBalance.state] += parseFloat(bankBalance.amount);
    } else {
      statesBankBalance[bankBalance.state] = parseFloat(bankBalance.amount);
    }
  });
  var totalAmountSum = 0;
  for (var state in statesBankBalance) {
    if (statesBankBalance[state] > minimumAmountCap)
      totalAmountSum += statesBankBalance[state];
  }

  return totalAmountSum;
}

function hundredThousandairs() {
  const minimumAmountCap = 100000;
  return bankBalanceArray.filter(
    bankBalance => parseFloat(bankBalance["amount"]) > minimumAmountCap
  );
}

export {
  datasetWithRoundedDollar,
  hundredThousandairs,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
