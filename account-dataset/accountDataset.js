  var data = require('./dataset.json')
  
  var bankBalancesArray = data["bankBalances"]
  var hundredThousandairsValue = 100000
  function hundredThousandairs() {
    return bankBalancesArray.filter((accountDetails) => {
      accountDetails.amount > hundredThousandairsValue
    })
  }
  function datasetWithRoundedDollar() {
    var roundedDollarArray = []
    bankBalancesArray.map((accountDetails) => {
      roundedDollarArray.push({
        "amount" : bankBalancesArray.amount,
        "state" : bankBalancesArray.state,
        "roundedValue" : Math.round(bankBalancesArray.amount)

      })
    })
    return roundedDollarArray
  }
  function sumOfBankBalance(){
    var sumOfAllAccounts = 0
    bankBalancesArray.map((account) => {
      sumOfAllAccounts += account.amount
    })
    return sumOfAllAccounts
  }
  function sumOfInterests() {
    var interestsSum
    var stateList = ["WI","IL","WY","OH","GE","DE"]
    bankBalancesArray.map((account) => {
      if(stateList.indexOf(account.state) !== -1) {
        interestsSum += Math.round(account.amount * (18.9/100))
      }
    })
    return interestsSum
  }
  


export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfAllAccounts,
  sumOfBankBalance,
  sumOfInterests
};
