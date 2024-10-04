export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // helper function
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    return name;
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    return length;
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
      throw new Error('Students must be an array of strings');
    }
    return students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateLength(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateStudents(value);
  }
}
