function rot13(encodedString) {
  var decodeString = "";
  var letters = /^[A-Za-z]+$/;
  var shift = 13;
  for (var i = 0; i < encodedString.length; i++) {
    if (encodedString[i].match(letters)) {
      decodeString += String.fromCharCode(
        ((encodedString.charCodeAt(i) - 65 + shift + 26) % 26) + 65
      );
    } else {
      decodeString += encodedString[i];
    }
  }

  return decodeString;
}

export { rot13 };
