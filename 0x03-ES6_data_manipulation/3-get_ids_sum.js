function getStudentIdsSum(students){
	const sum = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
	return sum;
}
module.exports = getStudentIdsSum;
