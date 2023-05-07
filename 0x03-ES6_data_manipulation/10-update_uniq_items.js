function updateUniqueItems(m) {
  m.forEach((key, value) => {
    if (key === 1) {
      m.set(value, 100);
    }
  });
  return m;
}
module.exports = updateUniqueItems;
