function abbreviateString(statement) {
  if (typeof statement !== 'string') throw new Error('Only Strings to be passed');

  const words = statement.split(' ');

  const firstWord = words.shift();
  const lastWord = words.pop();
  const firstLetterOfLastWord = lastWord.charAt(0).toUpperCase();

  return `${firstWord} ${firstLetterOfLastWord}.`;
}

export { abbreviateString };
