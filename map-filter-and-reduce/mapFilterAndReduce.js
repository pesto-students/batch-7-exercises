function mapFilterAndReduce(nameArray) {
  const namesHavinglengthLessThanFive = nameArray.filter(nameObj => nameObj.firstName.length < 5);
  const objNameWithLength = {};
  namesHavinglengthLessThanFive.map((nameObj) => {
    objNameWithLength[nameObj.firstName] = nameObj.firstName.length;
    return nameObj;
  });
  return objNameWithLength;
}

export { mapFilterAndReduce };
