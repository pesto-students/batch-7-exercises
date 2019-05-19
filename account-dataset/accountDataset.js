const dataset = require("./dataset.json");

function datasetWithRoundedDollar() {
  dataset.bankBalances.forEach(el => {
    el.rounded = Math.round(el.amount);
  });
  return dataset.bankBalances;
}

function hundredThousandairs() {
  var accountsResult = dataset.bankBalances.filter(account => {
    return account.amount > 100000;
  });
  return accountsResult;
}

function sumOfBankBalances() {
  let accounts = dataset.bankBalances;
  let sumAmount = accounts.reduce((sum, account) => {
    return sum + parseFloat(account.amount);
  }, 0);
  return parseFloat(sumAmount.toFixed(2));
}

function sumOfInterests() {
  let stateCodes = ["WI", "IL", "WY", "OH", "GA", "DE"];
  const interestRate = 18.9;

  let filterStateWise = dataset.bankBalances.filter(account => {
    return stateCodes.indexOf(account.state) != -1;
  });
  let payableAmount = filterStateWise.reduce((sum, account) => {
    return parseFloat(
      (sum + (parseFloat(account.amount) * interestRate) / 100).toFixed(2)
    );
  }, 0);

  return payableAmount;
}
function higherStateSums() {
  let totalAmountStateWise = {};
  let sumAmountThreshold = 1000000;
  let amountSum = 0;
  dataset.bankBalances.forEach(account => {
    if (totalAmountStateWise[account.state]) {
      totalAmountStateWise[account.state] += parseFloat(account.amount);
    } else {
      totalAmountStateWise[account.state] = parseFloat(account.amount);
    }
  });

  for (var key in totalAmountStateWise) {
    if (totalAmountStateWise[key] > sumAmountThreshold)
      amountSum += totalAmountStateWise[key];
  }

  return amountSum;
}

export {
  datasetWithRoundedDollar,
  hundredThousandairs,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
