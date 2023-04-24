function getStudentsByLocation(students, city){
	const cs = students.filter(x => x.location == city);
	return cs;
}
module.exports = getStudentsByLocation;
