const dataset = require('./dataset.json');
 
function datasetWithRoundedDollar()
{
  dataset.bankBalances.forEach((el)=>{
     el.rounded = Math.round(el.amount);
  });
  return dataset.bankBalances;
}

function hundredThousandairs(){
  var accountsResult = dataset.bankBalances.filter((account)=>{
    return account.amount > 100000;
  });
  return accountsResult;
}

function sumOfBankBalances(){
  var totalAmount = 0;
  function sumofAmount(sum, num) { 
    return sum.amount + num.amount; 
  }
  totalAmount = dataset.bankBalances.reduce(sumOfAmount); 
  return Math.round(totalAmount);
}

function sumOfInterests(){ 
  var stateCodes = ["WI","IL","WY","OH","GA","DE"];
  var interestPayable = 0;
  function sumofAmount(sum, num) { 
    return sum.amount + num.amount; 
  }
  var filterStateWise = dataset.bankBalances.filter((account)=>{
    return  stateCodes.indexOf(account.state) == 1;
  })
  totalAmount = filterStateWise.reduce(sumOfAmount); 
  interestPayable = calculateInterest(18.9,Math.round(totalAmount));
  return interestPayable
}
function higherStateSums(){

}

function calculateInterest(interestRate,amount)
{
  var interestPayable =  (amount*interestRate*1)/100;
  return interestPayable;
}
 

export {
  datasetWithRoundedDollar,hundredThousandairs,sumOfBankBalances,sumOfInterests,
  higherStateSums
};
