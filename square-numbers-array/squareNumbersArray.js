function squareNumbersArray(numberArray) {
  if (!Array.isArray(numberArray)) {
    throw new Error("My custom error");
  }

  return numberArray.map(number => {
    if (typeof number !== "number") {
      throw new Error("My custom error");
    }
    return number * number;
  });
}

export { squareNumbersArray };
