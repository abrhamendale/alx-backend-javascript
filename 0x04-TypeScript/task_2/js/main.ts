interface DirectorInterface {
	(str: string): string;
}

interface TeacherInterface {
	(str: string): string;
}

class Director {
	constructor() {
		var workFromHome: DirectorInterface = function(){
			return "";
		}
		var getCoffeeBreak: DirectorInterface = function(){
			return "";
		}
		var workDirectorTasks: DirectorInterface = function(){
			return "";
		}
	}
}

class Teacher {
	constructor(,) {
		var workFromHome: DirectorInterface = function(){
			return "";
		}
		var getCoffeeBreak: DirectorInterface = function(){
			return "";
		}
		var workDirectorTasks: DirectorInterface = function(){
			return "";
		}
	}
}

export function createEmployee(salary: number | string){
	if (!isNAN(salary)){
		if (salary < 500){
			return new Teacher;
		}
	}
	else{
		return new Director;
	}
}

export function isDirector(emplyee: string){
	return (instanceof Director);
}

export function executework(employee: string){
	if (isDirector(employee)){
		workDirectorTasks();
	}
	else{
		workTeacherTasks();
	}
}

const Subjects = "Math" | "History";

function teachClass(todayclass){
	if (todayClass === "Math"){
		return ("Teaching Math");
	}
	if (todayClass === "History"){
		return ("Teaching History");
	}
}
