import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

console.log(updateStudentGradeByCity(1, "San Francisco", [{ studentId: 5, grade: 97 }]));

console.log(updateStudentGradeByCity(getListStudents(), 1, [{ studentId: 5, grade: 97 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 99, grade: 97 }]));
