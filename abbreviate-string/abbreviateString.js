function abbreviateString(longString) {
  if (typeof longString !== 'string') {
    throw new Error();
  }

  const words = longString.split(' ');
  const lettersOfLastWord = words[words.length - 1].split('');
  const capitalizedLetter = lettersOfLastWord[0].toUpperCase();

  return `${words[0]} ${capitalizedLetter}.`;
}

export { abbreviateString };
