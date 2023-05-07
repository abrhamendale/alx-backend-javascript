export default class HolbertonCourse {
	_name;
	_length;
	_students;
	constructor(name, length, students) {
		console.log(typeof students);
		if (typeof name !== 'string')
			throw new TypeError("Name must be a string");
		if (typeof length !== 'number')
			throw new TypeError("Length must be a number");
		if (typeof students === 'object')
			if (students.length)
				if (typeof students[0] !== 'string')
					throw new TypeError("Students must be an array of strings");
		else
			throw new TypeError("111Students must be an array of strings");
		this._name = name;
		this._length = length;
		this._students = students;
	}

	get name() {
		return this._name;
	}

        set name(x) {
		if (typeof x !== 'string')
			throw new TypeError("Name must be a string");
		this._name = x;
        }

        get length() {
                return this._length;
        }
        
        set length(x) {
		if (typeof x !== 'number')
			throw new TypeError("Length must be a number");
                this._length = x;
        }

	get students() {
                return this._students;
        }

        set students(x) {
		console.assert(typeof students === ['String']);
                this._students = x;
        }
}
