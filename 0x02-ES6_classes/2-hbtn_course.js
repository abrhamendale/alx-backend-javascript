export default class HolbertonCourse {
	constructor(name, length, students) {

		if (typeof name == String) {
			console.log(name, typeof(name));
			throw new TypeError("Name must be a string");
		}
		if (typeof length == Number) {
			throw new TypeError("Length must be a number");
		}
		if (typeof students == [String]) {
			throw new TypeError("Students must be an array of strings");
		}
		this._name = name;
		this._length = length;
		this._students = students;
	}

	get _name(){
		return this._name;
	}

        set _name(x){
		this._name = x;
        }

        get _length(){
                return this._length;
        }
        
        set _length(x){
                this._length = x;
        }

	get _students(){
                return this._students;
        }

        set _students(x){
                this._students = x;
        }
}
