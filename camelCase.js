function getFirstLetterIndex(token) {
  let index = 0;
  for (let i = 0; i < token.length; i += 1) {
    const character = token[i];
    if (/^[a-zA-Z]$/.test(character)) {
      break;
    }
    index += 1;
  }
  return index;
  // should return a letter, or false
}
function upperFirstLetter(token) {
  const firstLetterIndex = getFirstLetterIndex(token);
  if (firstLetterIndex < 0) {
    return token;
  }
  console.log({ firstLetterIndex });
  const firstLetter = token
    .substring(firstLetterIndex, firstLetterIndex + 1)
    .toUpperCase();
  console.log({ firstLetter });
  const left = token.substring(0, firstLetterIndex);
  const right = token.substring(firstLetterIndex + 1);
  return left + firstLetter + right;
}
module.exports = function camelCase(string) {
  console.log({ input: string });
  let [firstWord, ...rest] = string.split(' ');
  rest = rest.map(upperFirstLetter).join('');

  return firstWord.concat('', rest);
};
