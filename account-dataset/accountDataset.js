let parsedDataset = require('./dataset.json').bankBalances;
// let parsedDataset=JSON.parse(dataset);
function hundredThousandairs() {
	return parsedDataset.filter((data)=>data.amount>100000);
}

function datasetWithRoundedDollar() {
	return parsedDataset.map((data)=>{
		return {
			amount  : data.amount,
			state   : data.state,
			rounded : Math.ceil(data.amount)
		}
	});
}

function sumOfBankBalances() {
	let sumOfAmount=0;
	parsedDataset.forEach((data)=>{
		sumOfAmount += data.amount;
	});
	return sumOfAmount;
}

function sumOfInterests() {
	let sumOfInterests=0;
	parsedDataset.forEach((data)=>{
		if(['WI','IL','WY','OH','GA','DE'].includes(data.state)){
			sumOfInterests += data.amount + (data.amount * 0.189)
		}
	});
	return sumOfInterests;
}

function higherStateSums() {
	var higherStateSums=0;
	let stateObject={};
	parsedDataset.forEach((data)=>{
		var state=data.state;
		if(!stateObject[state]){
			stateObject[state]=data.amount;
		}else{
			stateObject[state] += data.amount;
		}
	});
	Object.keys(stateObject).forEach(key =>{
		if(stateObject[key] > 1000000){
			higherStateSums +=stateObject[key];
		}
	});
	return higherStateSums;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
