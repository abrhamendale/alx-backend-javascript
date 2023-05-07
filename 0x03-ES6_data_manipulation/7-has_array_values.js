function hasValuesFromArray(s, a) {
  if (!Array.isArray(a) || !(s instanceof Set)) {
    return false;
  }
  let b = 1;
  a.forEach((element) => {
    if (!s.has(element)) {
      b = 0;
    }
  });
  if (b) {
    return true;
  }
  return false;
}
module.exports = hasValuesFromArray;
