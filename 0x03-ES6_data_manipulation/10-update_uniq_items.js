function updateUniqueItems(m) {
  if (!(m instanceof Map)) {
    throw Error('Cannot process');
  }
  m.forEach((key, value) => {
    if (key === 1) {
      m.set(value, 100);
    }
  });
  return m;
}
module.exports = updateUniqueItems;
