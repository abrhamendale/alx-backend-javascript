function getListStudents() {
  const a = [];
  a.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  a.push({ id: 2, firstName: 'James', location: 'Columbia' });
  a.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return a;
}
module.exports = getListStudents;
