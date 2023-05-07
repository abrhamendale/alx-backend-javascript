function grader(x, newGrades) {
  let br = 0;
  newGrades.forEach((element) => {
    if (x.id === element.studentId) {
      x.grade = element.grade;
      br = 1;
    }
    else {
      if (br === 0) {
        x.grade = 'N/A';
      }
    }
  });
  return x;
}
function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  const cs = students.filter((x) => x.location === city);
  const mp = cs.map((currentValue) => grader(currentValue, newGrades));
  return mp;
}
module.exports = updateStudentGradeByCity;
