/* eslint-disable */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const newGradeMap = new Map(newGrades.map((obj) => [obj.studentId, obj.grade]));

  return studentsList
	       .filter((student) => student.location === city)
	       .map((student) => {
      student.grade = newGradeMap.has(student.id) ? newGradeMap.get(student.id) : 'N/A';
      return student;
    });
}
