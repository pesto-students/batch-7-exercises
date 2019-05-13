function convertToRoman(number) {
  var divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 3, 2, 1];
  var romanHash = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M"
  };
  var romanNumber = "";
  for (var i = 0; i < divisors.length && number != 0; i++) {
    if (number >= divisors[i]) {
      var queotient = number / divisors[i];
      number = number % divisors[i];

      for (var j = 1; j <= queotient; j++) {
        romanNumber = romanNumber + romanHash[divisors[i]];
      }
    }
  }
  return romanNumber;
}

export { convertToRoman };
