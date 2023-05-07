function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const sum = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
    return sum;
  }
  return 0;
}
module.exports = getStudentIdsSum;
