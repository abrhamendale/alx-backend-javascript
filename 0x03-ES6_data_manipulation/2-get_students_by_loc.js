function getStudentsByLocation(students, city){
	if (Array.isArray(students)){
		const cs = students.filter(x => x.location == city);
		return cs;
	}
	else{
		return []
	}
}
module.exports = getStudentsByLocation;
