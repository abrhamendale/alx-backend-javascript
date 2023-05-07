function getListStudentIds(a1) {
  if (Array.isArray(a1)) {
    const a2 = a1.map((x) => x.id);
    return a2;
  }
  return [];
}
module.exports = getListStudentIds;
