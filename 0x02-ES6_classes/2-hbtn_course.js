export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (typeof students !== 'object') throw TypeError('Students must be an array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  set name(x) { this._name = x; }

  set length(x) { this._length = x; }

  set students(x) { this._students = x; }
}
