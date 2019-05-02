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
  return dataset.bankBalances.reduce((sum,account) =>(sum + Math.round(account.amount)),0)
}

function sumOfInterests() {
  let stateForInteresetCalculation = ['WI','IL','WY','OH','GA','DE'];
  let accountsInInterestedState= dataset.bankBalances.filter((account)=> stateForInteresetCalculation.includes(account.state));
  accountsInInterestedState.map((account) => (account.amount = parseFloat(account.amount * (18.9 /100)));
  let sumOfInterests = accountsInInterestedState.reduce((sum,account) => (sum += account.amount),0);
  return sumOfInterests;
}

function higherStateSums() {
  
}
export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
