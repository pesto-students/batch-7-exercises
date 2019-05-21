const isOnlyCharOrNumber = string => /^[a-zA-Z0-9]+$/.test(string);

function slugUrl(string, { separator } = { separator: '-' }) {
  const words = string.split(' ');
  const validWords = words.filter(isOnlyCharOrNumber);
  const lowerCasedWords = validWords.map(word => word.toLowerCase());
  return lowerCasedWords.join(separator);
}

export { slugUrl };
