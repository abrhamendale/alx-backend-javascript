function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    const cs = students.filter(x => x.location == city);
    return cs;
  }
  return [];
}
module.exports = getStudentsByLocation;
