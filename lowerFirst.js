module.exports = function lowerFirst(string) {
  if (!string) {
    return "";
  }
  const _string = String(string);
  const first = _string.slice(0, 1);
  const lower = first.toLowerCase();
  return lower.concat("", _string.substring(1));
};
