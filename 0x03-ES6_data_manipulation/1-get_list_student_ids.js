function getListStudentIds(a1) {
  if( Array.isArray(a1)) {
    const a2 = a1.map(x => x.id);
    return a2;
  }
  else {
    return [];
  }
}
module.exports = getListStudentIds;
