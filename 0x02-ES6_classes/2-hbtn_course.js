export default class HolbertonCourse {
  _name;
  _length;
  _students;
  constructor(name, length, students) {
    if (typeof name !== 'string')
      throw new TypeError("Name must be a string");
    else
      this._name = name;
    if (typeof length !== 'number')
      throw new TypeError("Length must be a number");
    else
      this._length = length;
    if (!Array.isArray(students))
      throw new TypeError("Students must be an array of strings");
    else
      if (students[0])
        if (typeof students[0] == 'string')
	  this._students = students;
	else
	  throw new TypeError("Students must be an array of strings");
      else
	  this._students = students;
}
  get name() {
    return this._name;
  }
  set name(x) {
    if (typeof x !== 'string')
      throw new TypeError("Name must be a string");
    else
      this._name = x;
  }
  get length() {
    return this._length;
  }      
  set length(x) {
    if (typeof x !== 'number')
      throw new TypeError("Length must be a number");
    else
      this._length = x;
  }
  get students() {
    return this._students;
  }
  set students(x) {
    if (!Array.isArray(x))
      throw new TypeError("Students must be an array of strings");
    else
      if (x[0])
	if (typeof x[0] == 'string')
	  this._students = x;
	else
          throw new TypeError("Students must be an array of strings");
      else
        this._students = x;
  }
}
