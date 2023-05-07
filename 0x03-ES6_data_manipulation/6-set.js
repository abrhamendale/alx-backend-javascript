function setFromArray(a) {
  if (Array.isArray(a)) {
    const mySet = new Set(a);
    return mySet;
  }
  return ('Set {}');
}
module.exports = setFromArray;
