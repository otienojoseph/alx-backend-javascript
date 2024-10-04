export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string' && name.length > 0) {
      this._name = name;
    } else {
      throw new Error('Name must be string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      console.error('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof students === 'object' || typeof students === 'string') {
      this._students = students;
    } else {
      console.error('Students must be a array');
    }
  }
}
