const dataset = require('./dataset.json');

function hundredThousandairs() {
  return dataset.bankBalances.filter((account) => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  let dataSetModified = dataset.bankBalances.map((account)=>({
    ...account,
    rounded : Math.round(account.amount)
  }));
  return dataSetModified;
}

function sumOfBankBalances() {
  return dataset.bankBalances.reduce((sum,account) =>(sum + parseFloat(account.amount)),0)
}

function sumOfInterests() {
  let stateForInteresetCalculation = ['WI','IL','WY','OH','GA','DE'];
  let accountsInInterestedState= dataset.bankBalances.filter((account)=> stateForInteresetCalculation.includes(account.state));
  accountsInInterestedState.map((account) => (account.amount = parseFloat(account.amount * (18.9 /100))));
  let sumOfInterests = accountsInInterestedState.reduce((sum,account) => (sum += account.amount),0);
  return sumOfInterests;
}

function higherStateSums() {
  let bankBalances = dataset.bankBalances;
  let aggregatedState = {};
  bankBalances.forEach((account) => {
    if (aggregatedState.hasOwnProperty(account.state)) {
      aggregatedState[account.state] += parseFloat(account.amount);
    } else {
      aggregatedState[account.state] = parseFloat(account.amount);
    }
  });
  const AMOUNT_THRESHHOLD = 1000000;
  let interestedStates = Object.keys(aggregatedState).filter((state) => aggregatedState[state] > AMOUNT_THRESHHOLD);
  return interestedStates.reduce((sum,state) => (sum + aggregatedState[state]) ,0)
}
export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
