interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName, lastName){
	return (firstName[0],".",lastName);
}

interface printTeacherFunction {
	(firstName: string, lastName: string);
}

